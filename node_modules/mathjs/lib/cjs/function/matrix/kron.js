"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKron = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'kron';
const dependencies = ['typed', 'matrix', 'multiplyScalar'];
const createKron = exports.createKron = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    multiplyScalar
  } = _ref;
  /**
     * Calculates the Kronecker product of 2 matrices or vectors.
     *
     * NOTE: If a one dimensional vector / matrix is given, it will be
     * wrapped so its two dimensions.
     * See the examples.
     *
     * Syntax:
     *
     *    math.kron(x, y)
     *
     * Examples:
     *
     *    math.kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])
     *    // returns [ [ 1, 2, 0, 0 ], [ 3, 4, 0, 0 ], [ 0, 0, 1, 2 ], [ 0, 0, 3, 4 ] ]
     *
     *    math.kron([1,1], [2,3,4])
     *    // returns [2, 3, 4, 2, 3, 4]
     *
     * See also:
     *
     *    multiply, dot, cross
     *
     * @param  {Array | Matrix} x     First vector
     * @param  {Array | Matrix} y     Second vector
     * @return {Array | Matrix}       Returns the Kronecker product of `x` and `y`
     */
  return typed(name, {
    'Matrix, Matrix': function (x, y) {
      return matrix(_kron(x.toArray(), y.toArray()));
    },
    'Matrix, Array': function (x, y) {
      return matrix(_kron(x.toArray(), y));
    },
    'Array, Matrix': function (x, y) {
      return matrix(_kron(x, y.toArray()));
    },
    'Array, Array': _kron
  });

  /**
   * Calculate the Kronecker product of two (1-dimensional) vectors,
   * with no dimension checking
   * @param {Array} a  First vector
   * @param {Array} b  Second vector
   * @returns {Array}  the 1-dimensional Kronecker product of a and b
   * @private
   */
  function _kron1d(a, b) {
    // TODO in core overhaul: would be faster to see if we can choose a
    // particular implementation of multiplyScalar at the beginning,
    // rather than re-dispatch for _every_ ordered pair of entries.
    return a.flatMap(x => b.map(y => multiplyScalar(x, y)));
  }

  /**
   * Calculate the Kronecker product of two possibly multidimensional arrays
   * @param {Array} a  First array
   * @param {Array} b  Second array
   * @param {number} [d]  common dimension; if missing, compute and match args
   * @returns {Array} Returns the Kronecker product of x and y
   * @private
     */
  function _kron(a, b) {
    let d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    if (d < 0) {
      let adim = (0, _array.arraySize)(a).length;
      let bdim = (0, _array.arraySize)(b).length;
      d = Math.max(adim, bdim);
      while (adim++ < d) a = [a];
      while (bdim++ < d) b = [b];
    }
    if (d === 1) return _kron1d(a, b);
    return a.flatMap(aSlice => b.map(bSlice => _kron(aSlice, bSlice, d - 1)));
  }
});