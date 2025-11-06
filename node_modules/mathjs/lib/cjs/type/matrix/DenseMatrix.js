"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDenseMatrixClass = void 0;
var _is = require("../../utils/is.js");
var _array = require("../../utils/array.js");
var _string = require("../../utils/string.js");
var _number = require("../../utils/number.js");
var _object = require("../../utils/object.js");
var _DimensionError = require("../../error/DimensionError.js");
var _factory = require("../../utils/factory.js");
var _optimizeCallback = require("../../utils/optimizeCallback.js");
// deno-lint-ignore-file no-this-alias

const name = 'DenseMatrix';
const dependencies = ['Matrix', 'config'];
const createDenseMatrixClass = exports.createDenseMatrixClass = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    Matrix,
    config
  } = _ref;
  /**
   * Dense Matrix implementation. A regular, dense matrix, supporting multi-dimensional matrices. This is the default matrix type.
   * @class DenseMatrix
   * @enum {{ value, index: number[] }}
   */
  function DenseMatrix(data, datatype) {
    if (!(this instanceof DenseMatrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if (datatype && !(0, _is.isString)(datatype)) {
      throw new Error('Invalid datatype: ' + datatype);
    }
    if ((0, _is.isMatrix)(data)) {
      // check data is a DenseMatrix
      if (data.type === 'DenseMatrix') {
        // clone data & size
        this._data = (0, _object.clone)(data._data);
        this._size = (0, _object.clone)(data._size);
        this._datatype = datatype || data._datatype;
      } else {
        // build data from existing matrix
        this._data = data.toArray();
        this._size = data.size();
        this._datatype = datatype || data._datatype;
      }
    } else if (data && (0, _is.isArray)(data.data) && (0, _is.isArray)(data.size)) {
      // initialize fields from JSON representation
      this._data = data.data;
      this._size = data.size;
      // verify the dimensions of the array
      (0, _array.validate)(this._data, this._size);
      this._datatype = datatype || data.datatype;
    } else if ((0, _is.isArray)(data)) {
      // replace nested Matrices with Arrays
      this._data = preprocess(data);
      // get the dimensions of the array
      this._size = (0, _array.arraySize)(this._data);
      // verify the dimensions of the array, TODO: compute size while processing array
      (0, _array.validate)(this._data, this._size);
      // data type unknown
      this._datatype = datatype;
    } else if (data) {
      // unsupported type
      throw new TypeError('Unsupported type of data (' + (0, _is.typeOf)(data) + ')');
    } else {
      // nothing provided
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
    }
  }
  DenseMatrix.prototype = new Matrix();

  /**
   * Create a new DenseMatrix
   */
  DenseMatrix.prototype.createDenseMatrix = function (data, datatype) {
    return new DenseMatrix(data, datatype);
  };

  /**
   * Attach type information
   */
  Object.defineProperty(DenseMatrix, 'name', {
    value: 'DenseMatrix'
  });
  DenseMatrix.prototype.constructor = DenseMatrix;
  DenseMatrix.prototype.type = 'DenseMatrix';
  DenseMatrix.prototype.isDenseMatrix = true;

  /**
   * Get the matrix type
   *
   * Usage:
   *    const matrixType = matrix.getDataType()  // retrieves the matrix type
   *
   * @memberOf DenseMatrix
   * @return {string}   type information; if multiple types are found from the Matrix, it will return "mixed"
   */
  DenseMatrix.prototype.getDataType = function () {
    return (0, _array.getArrayDataType)(this._data, _is.typeOf);
  };

  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()  // retrieve storage format
   *
   * @memberof DenseMatrix
   * @return {string}           The storage format.
   */
  DenseMatrix.prototype.storage = function () {
    return 'dense';
  };

  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()   // retrieve matrix datatype
   *
   * @memberof DenseMatrix
   * @return {string}           The datatype.
   */
  DenseMatrix.prototype.datatype = function () {
    return this._datatype;
  };

  /**
   * Create a new DenseMatrix
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {string} [datatype]
   */
  DenseMatrix.prototype.create = function (data, datatype) {
    return new DenseMatrix(data, datatype);
  };

  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @memberof DenseMatrix
   * @param {Index} index
   * @param {Array | Matrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */
  DenseMatrix.prototype.subset = function (index, replacement, defaultValue) {
    switch (arguments.length) {
      case 1:
        return _get(this, index);

      // intentional fall through
      case 2:
      case 3:
        return _set(this, index, replacement, defaultValue);
      default:
        throw new SyntaxError('Wrong number of arguments');
    }
  };

  /**
   * Get a single element from the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */
  DenseMatrix.prototype.get = function (index) {
    return (0, _array.get)(this._data, index);
  };

  /**
   * Replace a single element in the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {DenseMatrix} self
   */
  DenseMatrix.prototype.set = function (index, value, defaultValue) {
    if (!(0, _is.isArray)(index)) {
      throw new TypeError('Array expected');
    }
    if (index.length < this._size.length) {
      throw new _DimensionError.DimensionError(index.length, this._size.length, '<');
    }
    let i, ii, indexI;

    // enlarge matrix when needed
    const size = index.map(function (i) {
      return i + 1;
    });
    _fit(this, size, defaultValue);

    // traverse over the dimensions
    let data = this._data;
    for (i = 0, ii = index.length - 1; i < ii; i++) {
      indexI = index[i];
      (0, _array.validateIndex)(indexI, data.length);
      data = data[indexI];
    }

    // set new value
    indexI = index[index.length - 1];
    (0, _array.validateIndex)(indexI, data.length);
    data[indexI] = value;
    return this;
  };

  /**
   * Get a submatrix of this matrix
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index   Zero-based index
   * @private
   */
  function _get(matrix, index) {
    if (!(0, _is.isIndex)(index)) {
      throw new TypeError('Invalid index');
    }
    const isScalar = config.legacySubset ? index.size().every(idx => idx === 1) : index.isScalar();
    if (isScalar) {
      // return a scalar
      return matrix.get(index.min());
    } else {
      // validate dimensions
      const size = index.size();
      if (size.length !== matrix._size.length) {
        throw new _DimensionError.DimensionError(size.length, matrix._size.length);
      }

      // validate if any of the ranges in the index is out of range
      const min = index.min();
      const max = index.max();
      for (let i = 0, ii = matrix._size.length; i < ii; i++) {
        (0, _array.validateIndex)(min[i], matrix._size[i]);
        (0, _array.validateIndex)(max[i], matrix._size[i]);
      }

      // retrieve submatrix
      const returnMatrix = new DenseMatrix();
      const submatrix = _getSubmatrix(matrix._data, index);
      returnMatrix._size = submatrix.size;
      returnMatrix._datatype = matrix._datatype;
      returnMatrix._data = submatrix.data;
      return config.legacySubset ? returnMatrix.reshape(index.size()) : returnMatrix;
    }
  }

  /**
   * Get a submatrix of a multi dimensional matrix.
   * Index is not checked for correct number or length of dimensions.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @return {Array} submatrix
   * @private
   */
  function _getSubmatrix(data, index) {
    const maxDepth = index.size().length - 1;
    const size = Array(maxDepth);
    return {
      data: getSubmatrixRecursive(data),
      size: size.filter(x => x !== null)
    };
    function getSubmatrixRecursive(data) {
      let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      const dims = index.dimension(depth);
      function _mapIndex(dim, callback) {
        // applies a callback for when the index is a Number or a Matrix
        if ((0, _is.isNumber)(dim)) return callback(dim);else return dim.map(callback).valueOf();
      }
      if ((0, _is.isNumber)(dims)) {
        size[depth] = null;
      } else {
        size[depth] = dims.size()[0];
      }
      if (depth < maxDepth) {
        return _mapIndex(dims, dimIndex => {
          (0, _array.validateIndex)(dimIndex, data.length);
          return getSubmatrixRecursive(data[dimIndex], depth + 1);
        });
      } else {
        return _mapIndex(dims, dimIndex => {
          (0, _array.validateIndex)(dimIndex, data.length);
          return data[dimIndex];
        });
      }
    }
  }

  /**
   * Replace a submatrix in this matrix
   * Indexes are zero-based.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index
   * @param {DenseMatrix | Array | *} submatrix
   * @param {*} defaultValue          Default value, filled in on new entries when
   *                                  the matrix is resized.
   * @return {DenseMatrix} matrix
   * @private
   */
  function _set(matrix, index, submatrix, defaultValue) {
    if (!index || index.isIndex !== true) {
      throw new TypeError('Invalid index');
    }

    // get index size and check whether the index contains a single value
    const iSize = index.size();
    const isScalar = index.isScalar();

    // calculate the size of the submatrix, and convert it into an Array if needed
    let submatrixSize;
    if ((0, _is.isMatrix)(submatrix)) {
      submatrixSize = submatrix.size();
      submatrix = submatrix.valueOf();
    } else {
      submatrixSize = (0, _array.arraySize)(submatrix);
    }
    if (isScalar) {
      // set a scalar

      // check whether submatrix is a scalar
      if (submatrixSize.length !== 0) {
        throw new TypeError('Scalar expected');
      }
      matrix.set(index.min(), submatrix, defaultValue);
    } else {
      // set a submatrix

      // broadcast submatrix
      if (!(0, _object.deepStrictEqual)(submatrixSize, iSize)) {
        if (submatrixSize.length === 0) {
          submatrix = (0, _array.broadcastTo)([submatrix], iSize);
        } else {
          try {
            submatrix = (0, _array.broadcastTo)(submatrix, iSize);
          } catch (error) {}
        }
        submatrixSize = (0, _array.arraySize)(submatrix);
      }

      // validate dimensions
      if (iSize.length < matrix._size.length) {
        throw new _DimensionError.DimensionError(iSize.length, matrix._size.length, '<');
      }
      if (submatrixSize.length < iSize.length) {
        // calculate number of missing outer dimensions
        let i = 0;
        let outer = 0;
        while (iSize[i] === 1 && submatrixSize[i] === 1) {
          i++;
        }
        while (iSize[i] === 1) {
          outer++;
          i++;
        }

        // unsqueeze both outer and inner dimensions
        submatrix = (0, _array.unsqueeze)(submatrix, iSize.length, outer, submatrixSize);
      }

      // check whether the size of the submatrix matches the index size
      if (!(0, _object.deepStrictEqual)(iSize, submatrixSize)) {
        throw new _DimensionError.DimensionError(iSize, submatrixSize, '>');
      }

      // enlarge matrix when needed
      const size = index.max().map(function (i) {
        return i + 1;
      });
      _fit(matrix, size, defaultValue);

      // insert the sub matrix
      _setSubmatrix(matrix._data, index, submatrix);
    }
    return matrix;
  }

  /**
   * Replace a submatrix of a multi dimensional matrix.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @param {Array} submatrix
   * @private
   */
  function _setSubmatrix(data, index, submatrix) {
    const maxDepth = index.size().length - 1;
    setSubmatrixRecursive(data, submatrix);
    function setSubmatrixRecursive(data, submatrix) {
      let depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const range = index.dimension(depth);
      const recursiveCallback = (rangeIndex, i) => {
        (0, _array.validateIndex)(rangeIndex, data.length);
        setSubmatrixRecursive(data[rangeIndex], submatrix[i[0]], depth + 1);
      };
      const finalCallback = (rangeIndex, i) => {
        (0, _array.validateIndex)(rangeIndex, data.length);
        data[rangeIndex] = submatrix[i[0]];
      };
      if (depth < maxDepth) {
        if ((0, _is.isNumber)(range)) recursiveCallback(range, [0]);else range.forEach(recursiveCallback);
      } else {
        if ((0, _is.isNumber)(range)) finalCallback(range, [0]);else range.forEach(finalCallback);
      }
    }
  }

  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @memberof DenseMatrix
   * @param {number[] || Matrix} size The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */
  DenseMatrix.prototype.resize = function (size, defaultValue, copy) {
    // validate arguments
    if (!(0, _is.isCollection)(size)) {
      throw new TypeError('Array or Matrix expected');
    }

    // SparseMatrix input is always 2d, flatten this into 1d if it's indeed a vector
    const sizeArray = size.valueOf().map(value => {
      return Array.isArray(value) && value.length === 1 ? value[0] : value;
    });

    // matrix to resize
    const m = copy ? this.clone() : this;
    // resize matrix
    return _resize(m, sizeArray, defaultValue);
  };
  function _resize(matrix, size, defaultValue) {
    // check size
    if (size.length === 0) {
      // first value in matrix
      let v = matrix._data;
      // go deep
      while ((0, _is.isArray)(v)) {
        v = v[0];
      }
      return v;
    }
    // resize matrix
    matrix._size = size.slice(0); // copy the array
    matrix._data = (0, _array.resize)(matrix._data, matrix._size, defaultValue);
    // return matrix
    return matrix;
  }

  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * NOTE: This might be better suited to copy by default, instead of modifying
   *       in place. For now, it operates in place to remain consistent with
   *       resize().
   *
   * @memberof DenseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */
  DenseMatrix.prototype.reshape = function (size, copy) {
    const m = copy ? this.clone() : this;
    m._data = (0, _array.reshape)(m._data, size);
    const currentLength = m._size.reduce((length, size) => length * size);
    m._size = (0, _array.processSizesWildcard)(size, currentLength);
    return m;
  };

  /**
   * Enlarge the matrix when it is smaller than given size.
   * If the matrix is larger or equal sized, nothing is done.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix           The matrix to be resized
   * @param {number[]} size
   * @param {*} defaultValue          Default value, filled in on new entries.
   * @private
   */
  function _fit(matrix, size, defaultValue) {
    const
    // copy the array
    newSize = matrix._size.slice(0);
    let changed = false;

    // add dimensions when needed
    while (newSize.length < size.length) {
      newSize.push(0);
      changed = true;
    }

    // enlarge size when needed
    for (let i = 0, ii = size.length; i < ii; i++) {
      if (size[i] > newSize[i]) {
        newSize[i] = size[i];
        changed = true;
      }
    }
    if (changed) {
      // resize only when size is changed
      _resize(matrix, newSize, defaultValue);
    }
  }

  /**
   * Create a clone of the matrix
   * @memberof DenseMatrix
   * @return {DenseMatrix} clone
   */
  DenseMatrix.prototype.clone = function () {
    const m = new DenseMatrix({
      data: (0, _object.clone)(this._data),
      size: (0, _object.clone)(this._size),
      datatype: this._datatype
    });
    return m;
  };

  /**
   * Retrieve the size of the matrix.
   * @memberof DenseMatrix
   * @returns {number[]} size
   */
  DenseMatrix.prototype.size = function () {
    return this._size.slice(0); // return a clone of _size
  };

  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} skipZeros   If true, the callback function is invoked only for non-zero entries
   * @param {boolean} isUnary     If true, the callback function is invoked with one parameter
   *
   * @return {DenseMatrix} matrix
   */
  DenseMatrix.prototype.map = function (callback) {
    let skipZeros = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let isUnary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const me = this;
    const maxDepth = me._size.length - 1;
    if (maxDepth < 0) return me.clone();
    const fastCallback = (0, _optimizeCallback.optimizeCallback)(callback, me, 'map', isUnary);
    const fastCallbackFn = fastCallback.fn;
    const result = me.create(undefined, me._datatype);
    result._size = me._size;
    if (isUnary || fastCallback.isUnary) {
      result._data = iterateUnary(me._data);
      return result;
    }
    if (maxDepth === 0) {
      const inputData = me.valueOf();
      const data = Array(inputData.length);
      for (let i = 0; i < inputData.length; i++) {
        data[i] = fastCallbackFn(inputData[i], [i], me);
      }
      result._data = data;
      return result;
    }
    const index = [];
    result._data = iterate(me._data);
    return result;
    function iterate(data) {
      let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      const result = Array(data.length);
      if (depth < maxDepth) {
        for (let i = 0; i < data.length; i++) {
          index[depth] = i;
          result[i] = iterate(data[i], depth + 1);
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          index[depth] = i;
          result[i] = fastCallbackFn(data[i], index.slice(), me);
        }
      }
      return result;
    }
    function iterateUnary(data) {
      let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      const result = Array(data.length);
      if (depth < maxDepth) {
        for (let i = 0; i < data.length; i++) {
          result[i] = iterateUnary(data[i], depth + 1);
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          result[i] = fastCallbackFn(data[i]);
        }
      }
      return result;
    }
  };

  /**
   * Execute a callback function on each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} skipZeros   If true, the callback function is invoked only for non-zero entries
   * @param {boolean} isUnary     If true, the callback function is invoked with one parameter
   */
  DenseMatrix.prototype.forEach = function (callback) {
    let skipZeros = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let isUnary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const me = this;
    const maxDepth = me._size.length - 1;
    if (maxDepth < 0) return;
    const fastCallback = (0, _optimizeCallback.optimizeCallback)(callback, me, 'map', isUnary);
    const fastCallbackFn = fastCallback.fn;
    if (isUnary || fastCallback.isUnary) {
      iterateUnary(me._data);
      return;
    }
    if (maxDepth === 0) {
      for (let i = 0; i < me._data.length; i++) {
        fastCallbackFn(me._data[i], [i], me);
      }
      return;
    }
    const index = [];
    iterate(me._data);
    function iterate(data) {
      let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (depth < maxDepth) {
        for (let i = 0; i < data.length; i++) {
          index[depth] = i;
          iterate(data[i], depth + 1);
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          index[depth] = i;
          fastCallbackFn(data[i], index.slice(), me);
        }
      }
    }
    function iterateUnary(data) {
      let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (depth < maxDepth) {
        for (let i = 0; i < data.length; i++) {
          iterateUnary(data[i], depth + 1);
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          fastCallbackFn(data[i]);
        }
      }
    }
  };

  /**
   * Iterate over the matrix elements
   * @return {Iterable<{ value, index: number[] }>}
   */
  DenseMatrix.prototype[Symbol.iterator] = function* () {
    const maxDepth = this._size.length - 1;
    if (maxDepth < 0) {
      return;
    }
    if (maxDepth === 0) {
      for (let i = 0; i < this._data.length; i++) {
        yield {
          value: this._data[i],
          index: [i]
        };
      }
      return;
    }

    // Multi-dimensional matrix: iterate over all elements
    const index = Array(maxDepth + 1).fill(0);
    const totalElements = this._size.reduce((a, b) => a * b, 1);
    for (let count = 0; count < totalElements; count++) {
      // Traverse to the current element using indices
      let current = this._data;
      for (let d = 0; d < maxDepth; d++) {
        current = current[index[d]];
      }
      yield {
        value: current[index[maxDepth]],
        index: index.slice()
      };

      // Increment indices for next element
      for (let d = maxDepth; d >= 0; d--) {
        index[d]++;
        if (index[d] < this._size[d]) break;
        index[d] = 0;
      }
    }
  };

  /**
   * Returns an array containing the rows of a 2D matrix
   * @returns {Array<Matrix>}
   */
  DenseMatrix.prototype.rows = function () {
    const result = [];
    const s = this.size();
    if (s.length !== 2) {
      throw new TypeError('Rows can only be returned for a 2D matrix.');
    }
    const data = this._data;
    for (const row of data) {
      result.push(new DenseMatrix([row], this._datatype));
    }
    return result;
  };

  /**
   * Returns an array containing the columns of a 2D matrix
   * @returns {Array<Matrix>}
   */
  DenseMatrix.prototype.columns = function () {
    const result = [];
    const s = this.size();
    if (s.length !== 2) {
      throw new TypeError('Rows can only be returned for a 2D matrix.');
    }
    const data = this._data;
    for (let i = 0; i < s[1]; i++) {
      const col = data.map(row => [row[i]]);
      result.push(new DenseMatrix(col, this._datatype));
    }
    return result;
  };

  /**
   * Create an Array with a copy of the data of the DenseMatrix
   * @memberof DenseMatrix
   * @returns {Array} array
   */
  DenseMatrix.prototype.toArray = function () {
    return (0, _object.clone)(this._data);
  };

  /**
   * Get the primitive value of the DenseMatrix: a multidimensional array
   * @memberof DenseMatrix
   * @returns {Array} array
   */
  DenseMatrix.prototype.valueOf = function () {
    return this._data;
  };

  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @memberof DenseMatrix
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  DenseMatrix.prototype.format = function (options) {
    return (0, _string.format)(this._data, options);
  };

  /**
   * Get a string representation of the matrix
   * @memberof DenseMatrix
   * @returns {string} str
   */
  DenseMatrix.prototype.toString = function () {
    return (0, _string.format)(this._data);
  };

  /**
   * Get a JSON representation of the matrix
   * @memberof DenseMatrix
   * @returns {Object}
   */
  DenseMatrix.prototype.toJSON = function () {
    return {
      mathjs: 'DenseMatrix',
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };

  /**
   * Get the kth Matrix diagonal.
   *
   * @memberof DenseMatrix
   * @param {number | BigNumber} [k=0]     The kth diagonal where the vector will retrieved.
   *
   * @returns {Matrix}                     The matrix with the diagonal values.
   */
  DenseMatrix.prototype.diagonal = function (k) {
    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if ((0, _is.isBigNumber)(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!(0, _is.isNumber)(k) || !(0, _number.isInteger)(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }
    const kSuper = k > 0 ? k : 0;
    const kSub = k < 0 ? -k : 0;

    // rows & columns
    const rows = this._size[0];
    const columns = this._size[1];

    // number diagonal values
    const n = Math.min(rows - kSub, columns - kSuper);

    // x is a matrix get diagonal from matrix
    const data = [];

    // loop rows
    for (let i = 0; i < n; i++) {
      data[i] = this._data[i + kSub][i + kSuper];
    }

    // create DenseMatrix
    return new DenseMatrix({
      data,
      size: [n],
      datatype: this._datatype
    });
  };

  /**
   * Create a diagonal matrix.
   *
   * @memberof DenseMatrix
   * @param {Array} size                     The matrix size.
   * @param {number | Matrix | Array } value The values for the diagonal.
   * @param {number | BigNumber} [k=0]       The kth diagonal where the vector will be filled in.
   * @param {number} [defaultValue]          The default value for non-diagonal
   * @param {string} [datatype]              The datatype for the diagonal
   *
   * @returns {DenseMatrix}
   */
  DenseMatrix.diagonal = function (size, value, k, defaultValue) {
    if (!(0, _is.isArray)(size)) {
      throw new TypeError('Array expected, size parameter');
    }
    if (size.length !== 2) {
      throw new Error('Only two dimensions matrix are supported');
    }

    // map size & validate
    size = size.map(function (s) {
      // check it is a big number
      if ((0, _is.isBigNumber)(s)) {
        // convert it
        s = s.toNumber();
      }
      // validate arguments
      if (!(0, _is.isNumber)(s) || !(0, _number.isInteger)(s) || s < 1) {
        throw new Error('Size values must be positive integers');
      }
      return s;
    });

    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if ((0, _is.isBigNumber)(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!(0, _is.isNumber)(k) || !(0, _number.isInteger)(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }
    const kSuper = k > 0 ? k : 0;
    const kSub = k < 0 ? -k : 0;

    // rows and columns
    const rows = size[0];
    const columns = size[1];

    // number of non-zero items
    const n = Math.min(rows - kSub, columns - kSuper);

    // value extraction function
    let _value;

    // check value
    if ((0, _is.isArray)(value)) {
      // validate array
      if (value.length !== n) {
        // number of values in array must be n
        throw new Error('Invalid value array length');
      }
      // define function
      _value = function (i) {
        // return value @ i
        return value[i];
      };
    } else if ((0, _is.isMatrix)(value)) {
      // matrix size
      const ms = value.size();
      // validate matrix
      if (ms.length !== 1 || ms[0] !== n) {
        // number of values in array must be n
        throw new Error('Invalid matrix length');
      }
      // define function
      _value = function (i) {
        // return value @ i
        return value.get([i]);
      };
    } else {
      // define function
      _value = function () {
        // return value
        return value;
      };
    }

    // discover default value if needed
    if (!defaultValue) {
      // check first value in array
      defaultValue = (0, _is.isBigNumber)(_value(0)) ? _value(0).mul(0) // trick to create a BigNumber with value zero
      : 0;
    }

    // empty array
    let data = [];

    // check we need to resize array
    if (size.length > 0) {
      // resize array
      data = (0, _array.resize)(data, size, defaultValue);
      // fill diagonal
      for (let d = 0; d < n; d++) {
        data[d + kSub][d + kSuper] = _value(d);
      }
    }

    // create DenseMatrix
    return new DenseMatrix({
      data,
      size: [rows, columns]
    });
  };

  /**
   * Generate a matrix from a JSON object
   * @memberof DenseMatrix
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "DenseMatrix", data: [], size: []}`,
   *                       where mathjs is optional
   * @returns {DenseMatrix}
   */
  DenseMatrix.fromJSON = function (json) {
    return new DenseMatrix(json);
  };

  /**
   * Swap rows i and j in Matrix.
   *
   * @memberof DenseMatrix
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   *
   * @return {Matrix}        The matrix reference
   */
  DenseMatrix.prototype.swapRows = function (i, j) {
    // check index
    if (!(0, _is.isNumber)(i) || !(0, _number.isInteger)(i) || !(0, _is.isNumber)(j) || !(0, _number.isInteger)(j)) {
      throw new Error('Row index must be positive integers');
    }
    // check dimensions
    if (this._size.length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }
    // validate index
    (0, _array.validateIndex)(i, this._size[0]);
    (0, _array.validateIndex)(j, this._size[0]);

    // swap rows
    DenseMatrix._swapRows(i, j, this._data);
    // return current instance
    return this;
  };

  /**
   * Swap rows i and j in Dense Matrix data structure.
   *
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   * @param {Array} data     Matrix data
   */
  DenseMatrix._swapRows = function (i, j, data) {
    // swap values i <-> j
    const vi = data[i];
    data[i] = data[j];
    data[j] = vi;
  };

  /**
   * Preprocess data, which can be an Array or DenseMatrix with nested Arrays and
   * Matrices. Clones all (nested) Arrays, and replaces all nested Matrices with Arrays
   * @memberof DenseMatrix
   * @param {Array | Matrix} data
   * @return {Array} data
   */
  function preprocess(data) {
    if ((0, _is.isMatrix)(data)) {
      return preprocess(data.valueOf());
    }
    if ((0, _is.isArray)(data)) {
      return data.map(preprocess);
    }
    return data;
  }
  return DenseMatrix;
}, {
  isClass: true
});