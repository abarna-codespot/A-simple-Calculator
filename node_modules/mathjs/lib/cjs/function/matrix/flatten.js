"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFlatten = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'flatten';
const dependencies = ['typed'];
const createFlatten = exports.createFlatten = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Flatten a multidimensional matrix into a single dimensional matrix.
   * A new matrix is returned, the original matrix is left untouched.
   *
   * Syntax:
   *
   *    math.flatten(x)
   *
   * Examples:
   *
   *    math.flatten([[1,2], [3,4]])   // returns [1, 2, 3, 4]
   *
   * See also:
   *
   *    concat, resize, size, squeeze
   *
   * @param {DenseMatrix | Array} x   Matrix to be flattened
   * @return {DenseMatrix | Array} Returns the flattened matrix
   */
  return typed(name, {
    Array: function (x) {
      return (0, _array.flatten)(x);
    },
    DenseMatrix: function (x) {
      // Return the same matrix type as x (Dense or Sparse Matrix)
      // Return the same data type as x
      return x.create((0, _array.flatten)(x.valueOf(), true), x.datatype());
    },
    SparseMatrix: function (_x) {
      throw new TypeError('SparseMatrix is not supported by function flatten ' + 'because it does not support 1D vectors. ' + 'Convert to a DenseMatrix or Array first. Example: flatten(x.toArray())');
    }
  });
});