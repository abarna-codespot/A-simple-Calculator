"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForEach = void 0;
var _optimizeCallback = require("../../utils/optimizeCallback.js");
var _factory = require("../../utils/factory.js");
var _array = require("../../utils/array.js");
const name = 'forEach';
const dependencies = ['typed'];
const createForEach = exports.createForEach = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Iterate over all elements of a matrix/array, and executes the given callback function.
   *
   * The callback is invoked with three arguments: the current value,
   * the current index, and the matrix operated upon.
   * Note that because the matrix/array might be
   * multidimensional, the "index" argument is always an array of numbers giving
   * the index in each dimension. This is true even for vectors: the "index"
   * argument is an array of length 1, rather than simply a number.
   *
   * Syntax:
   *
   *    math.forEach(x, callback)
   *
   * Examples:
   *
   *    math.forEach([1, 2, 3], function(value) {
   *      console.log(value)
   *    })
   *    // outputs 1, 2, 3
   *
   * See also:
   *
   *    filter, map, sort
   *
   * @param {Matrix | Array} x    The matrix to iterate on.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix/array being traversed.
   */
  return typed(name, {
    'Array, function': _forEach,
    'Matrix, function': function (x, callback) {
      x.forEach(callback);
    }
  });
});

/**
 * forEach for a multidimensional array
 * @param {Array} array
 * @param {Function} callback
 * @private
 */
function _forEach(array, callback) {
  const fastCallback = (0, _optimizeCallback.optimizeCallback)(callback, array, name);
  (0, _array.deepForEach)(array, fastCallback.fn, fastCallback.isUnary);
}