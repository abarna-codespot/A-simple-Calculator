"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEigs = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _factory = require("../../utils/factory.js");
var _string = require("../../utils/string.js");
var _complexEigs = require("./eigs/complexEigs.js");
var _realSymmetric = require("./eigs/realSymmetric.js");
var _is = require("../../utils/is.js");
const name = 'eigs';

// The absolute state of math.js's dependency system:
const dependencies = ['config', 'typed', 'matrix', 'addScalar', 'equal', 'subtract', 'abs', 'atan', 'cos', 'sin', 'multiplyScalar', 'divideScalar', 'inv', 'bignumber', 'multiply', 'add', 'larger', 'column', 'flatten', 'number', 'complex', 'sqrt', 'diag', 'size', 'reshape', 'qr', 'usolve', 'usolveAll', 'im', 're', 'smaller', 'matrixFromColumns', 'dot'];
const createEigs = exports.createEigs = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    config,
    typed,
    matrix,
    addScalar,
    subtract,
    equal,
    abs,
    atan,
    cos,
    sin,
    multiplyScalar,
    divideScalar,
    inv,
    bignumber,
    multiply,
    add,
    larger,
    column,
    flatten,
    number,
    complex,
    sqrt,
    diag,
    size,
    reshape,
    qr,
    usolve,
    usolveAll,
    im,
    re,
    smaller,
    matrixFromColumns,
    dot
  } = _ref;
  const doRealSymmetric = (0, _realSymmetric.createRealSymmetric)({
    config,
    addScalar,
    subtract,
    column,
    flatten,
    equal,
    abs,
    atan,
    cos,
    sin,
    multiplyScalar,
    inv,
    bignumber,
    complex,
    multiply,
    add
  });
  const doComplexEigs = (0, _complexEigs.createComplexEigs)({
    config,
    addScalar,
    subtract,
    multiply,
    multiplyScalar,
    flatten,
    divideScalar,
    sqrt,
    abs,
    bignumber,
    diag,
    size,
    reshape,
    qr,
    inv,
    usolve,
    usolveAll,
    equal,
    complex,
    larger,
    smaller,
    matrixFromColumns,
    dot
  });

  /**
   * Compute eigenvalues and optionally eigenvectors of a square matrix.
   * The eigenvalues are sorted by their absolute value, ascending, and
   * returned as a vector in the `values` property of the returned project.
   * An eigenvalue with algebraic multiplicity k will be listed k times, so
   * that the returned `values` vector always has length equal to the size
   * of the input matrix.
   *
   * The `eigenvectors` property of the return value provides the eigenvectors.
   * It is an array of plain objects: the `value` property of each gives the
   * associated eigenvalue, and the `vector` property gives the eigenvector
   * itself. Note that the same `value` property will occur as many times in
   * the list provided by `eigenvectors` as the geometric multiplicity of
   * that value.
   *
   * If the algorithm fails to converge, it will throw an error –
   * in that case, however, you may still find useful information
   * in `err.values` and `err.vectors`.
   *
   * Note that the 'precision' option does not directly specify the _accuracy_
   * of the returned eigenvalues. Rather, it determines how small an entry
   * of the iterative approximations to an upper triangular matrix must be
   * in order to be considered zero. The actual accuracy of the returned
   * eigenvalues may be greater or less than the precision, depending on the
   * conditioning of the matrix and how far apart or close the actual
   * eigenvalues are. Note that currently, relatively simple, "traditional"
   * methods of eigenvalue computation are being used; this is not a modern,
   * high-precision eigenvalue computation. That said, it should typically
   * produce fairly reasonable results.
   *
   * Syntax:
   *
   *     math.eigs(x, [prec])
   *     math.eigs(x, {options})
   *
   * Examples:
   *
   *     const { eigs, multiply, column, transpose, matrixFromColumns } = math
   *     const H = [[5, 2.3], [2.3, 1]]
   *     const ans = eigs(H) // returns {values: [E1,E2...sorted], eigenvectors: [{value: E1, vector: v2}, {value: e, vector: v2}, ...]
   *     const E = ans.values
   *     const V = ans.eigenvectors
   *     multiply(H, V[0].vector)) // returns multiply(E[0], V[0].vector))
   *     const U = matrixFromColumns(...V.map(obj => obj.vector))
   *     const UTxHxU = multiply(transpose(U), H, U) // diagonalizes H if possible
   *     E[0] == UTxHxU[0][0]  // returns true always
   *
   *     // Compute only approximate eigenvalues:
   *     const {values} = eigs(H, {eigenvectors: false, precision: 1e-6})
   *
   * See also:
   *
   *     inv
   *
   * @param {Array | Matrix} x  Matrix to be diagonalized
   *
   * @param {number | BigNumber | OptsObject} [opts] Object with keys `precision`, defaulting to config.relTol, and `eigenvectors`, defaulting to true and specifying whether to compute eigenvectors. If just a number, specifies precision.
   * @return {{values: Array|Matrix, eigenvectors?: Array<EVobj>}} Object containing an array of eigenvalues and an array of {value: number|BigNumber, vector: Array|Matrix} objects. The eigenvectors property is undefined if eigenvectors were not requested.
   *
   */
  return typed('eigs', {
    // The conversion to matrix in the first two implementations,
    // just to convert back to an array right away in
    // computeValuesAndVectors, is unfortunate, and should perhaps be
    // streamlined. It is done because the Matrix object carries some
    // type information about its entries, and so constructing the matrix
    // is a roundabout way of doing type detection.
    Array: function (x) {
      return doEigs(matrix(x));
    },
    'Array, number|BigNumber': function (x, prec) {
      return doEigs(matrix(x), {
        precision: prec
      });
    },
    'Array, Object'(x, opts) {
      return doEigs(matrix(x), opts);
    },
    Matrix: function (mat) {
      return doEigs(mat, {
        matricize: true
      });
    },
    'Matrix, number|BigNumber': function (mat, prec) {
      return doEigs(mat, {
        precision: prec,
        matricize: true
      });
    },
    'Matrix, Object': function (mat, opts) {
      const useOpts = {
        matricize: true
      };
      (0, _extends2.default)(useOpts, opts);
      return doEigs(mat, useOpts);
    }
  });
  function doEigs(mat) {
    var _opts$precision;
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const computeVectors = 'eigenvectors' in opts ? opts.eigenvectors : true;
    const prec = (_opts$precision = opts.precision) !== null && _opts$precision !== void 0 ? _opts$precision : config.relTol;
    const result = computeValuesAndVectors(mat, prec, computeVectors);
    if (opts.matricize) {
      result.values = matrix(result.values);
      if (computeVectors) {
        result.eigenvectors = result.eigenvectors.map(_ref2 => {
          let {
            value,
            vector
          } = _ref2;
          return {
            value,
            vector: matrix(vector)
          };
        });
      }
    }
    if (computeVectors) {
      Object.defineProperty(result, 'vectors', {
        enumerable: false,
        // to make sure that the eigenvectors can still be
        // converted to string.
        get: () => {
          throw new Error('eigs(M).vectors replaced with eigs(M).eigenvectors');
        }
      });
    }
    return result;
  }
  function computeValuesAndVectors(mat, prec, computeVectors) {
    const arr = mat.toArray(); // NOTE: arr is guaranteed to be unaliased
    // and so safe to modify in place
    const asize = mat.size();
    if (asize.length !== 2 || asize[0] !== asize[1]) {
      throw new RangeError(`Matrix must be square (size: ${(0, _string.format)(asize)})`);
    }
    const N = asize[0];
    if (isReal(arr, N, prec)) {
      coerceReal(arr, N); // modifies arr by side effect

      if (isSymmetric(arr, N, prec)) {
        const type = coerceTypes(mat, arr, N); // modifies arr by side effect
        return doRealSymmetric(arr, N, prec, type, computeVectors);
      }
    }
    const type = coerceTypes(mat, arr, N); // modifies arr by side effect
    return doComplexEigs(arr, N, prec, type, computeVectors);
  }

  /** @return {boolean} */
  function isSymmetric(arr, N, prec) {
    for (let i = 0; i < N; i++) {
      for (let j = i; j < N; j++) {
        // TODO proper comparison of bignum and frac
        if (larger(bignumber(abs(subtract(arr[i][j], arr[j][i]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }

  /** @return {boolean} */
  function isReal(arr, N, prec) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // TODO proper comparison of bignum and frac
        if (larger(bignumber(abs(im(arr[i][j]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }
  function coerceReal(arr, N) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        arr[i][j] = re(arr[i][j]);
      }
    }
  }

  /** @return {'number' | 'BigNumber' | 'Complex'} */
  function coerceTypes(mat, arr, N) {
    /** @type {string} */
    const type = mat.datatype();
    if (type === 'number' || type === 'BigNumber' || type === 'Complex') {
      return type;
    }
    let hasNumber = false;
    let hasBig = false;
    let hasComplex = false;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const el = arr[i][j];
        if ((0, _is.isNumber)(el) || (0, _is.isFraction)(el)) {
          hasNumber = true;
        } else if ((0, _is.isBigNumber)(el)) {
          hasBig = true;
        } else if ((0, _is.isComplex)(el)) {
          hasComplex = true;
        } else {
          throw TypeError('Unsupported type in Matrix: ' + (0, _is.typeOf)(el));
        }
      }
    }
    if (hasBig && hasComplex) {
      console.warn('Complex BigNumbers not supported, this operation will lose precission.');
    }
    if (hasComplex) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          arr[i][j] = complex(arr[i][j]);
        }
      }
      return 'Complex';
    }
    if (hasBig) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          arr[i][j] = bignumber(arr[i][j]);
        }
      }
      return 'BigNumber';
    }
    if (hasNumber) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          arr[i][j] = number(arr[i][j]);
        }
      }
      return 'number';
    } else {
      throw TypeError('Matrix contains unsupported types only.');
    }
  }
});