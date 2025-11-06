"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCount = void 0;
var _factory = require("../../utils/factory.js");
const name = 'count';
const dependencies = ['typed', 'size', 'prod'];
const createCount = exports.createCount = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    size,
    prod
  } = _ref;
  /**
   * Count the number of elements of a matrix, array or string.
   *
   * Syntax:
   *
   *     math.count(x)
   *
   * Examples:
   *
   *     math.count('hello world')        // returns 11
   *     const A = [[1, 2, 3], [4, 5, 6]]
   *     math.count(A)                    // returns 6
   *     math.count(math.range(1,6))      // returns 5
   *
   * See also:
   *
   *     size
   *
   * @param {string | Array | Matrix} x  A matrix or string
   * @return {number} An integer with the elements in `x`.
   */
  return typed(name, {
    string: function (x) {
      return x.length;
    },
    'Matrix | Array': function (x) {
      return prod(size(x));
    }
  });
});