"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMax = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _number = require("../../utils/number.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
const name = 'max';
const dependencies = ['typed', 'config', 'numeric', 'larger', 'isNaN'];
const createMax = exports.createMax = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    numeric,
    larger,
    isNaN: mathIsNaN
  } = _ref;
  /**
   * Compute the maximum value of a matrix or a  list with values.
   * In case of a multidimensional array, the maximum of the flattened array
   * will be calculated. When `dim` is provided, the maximum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.max(a, b, c, ...)
   *     math.max(A)
   *     math.max(A, dimension)
   *
   * Examples:
   *
   *     math.max(2, 1, 4, 3)                  // returns 4
   *     math.max([2, 1, 4, 3])                // returns 4
   *
   *     // maximum over a specified dimension (zero-based)
   *     math.max([[2, 5], [4, 3], [1, 7]], 0) // returns [4, 7]
   *     math.max([[2, 5], [4, 3], [1, 7]], 1) // returns [5, 4, 7]
   *
   *     math.max(2.7, 7.1, -4.5, 2.0, 4.1)    // returns 7.1
   *     math.min(2.7, 7.1, -4.5, 2.0, 4.1)    // returns -4.5
   *
   * See also:
   *
   *    mean, median, min, prod, std, sum, variance
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The maximum value
   */
  return typed(name, {
    // max([a, b, c, d, ...])
    'Array | Matrix': _max,
    // max([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function (array, dim) {
      return (0, _collection.reduce)(array, dim.valueOf(), _largest);
    },
    // max(a, b, c, d, ...)
    '...': function (args) {
      if ((0, _collection.containsCollections)(args)) {
        throw new TypeError('Scalar values expected in function max');
      }
      return _max(args);
    }
  });

  /**
   * Return the largest of two values
   * @param {*} x
   * @param {*} y
   * @returns {*} Returns x when x is largest, or y when y is largest
   * @private
   */
  function _largest(x, y) {
    try {
      return larger(x, y) ? x : y;
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, 'max', y);
    }
  }

  /**
   * Recursively calculate the maximum value in an n-dimensional array
   * @param {Array} array
   * @return {number} max
   * @private
   */
  function _max(array) {
    let res;
    (0, _collection.deepForEach)(array, function (value) {
      try {
        if (mathIsNaN(value)) {
          res = value;
        } else if (res === undefined || larger(value, res)) {
          res = value;
        }
      } catch (err) {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'max', value);
      }
    });
    if (res === undefined) {
      throw new Error('Cannot calculate max of an empty array');
    }

    // make sure returning numeric value: parse a string into a numeric value
    if (typeof res === 'string') {
      res = numeric(res, (0, _number.safeNumberType)(res, config));
    }
    return res;
  }
});