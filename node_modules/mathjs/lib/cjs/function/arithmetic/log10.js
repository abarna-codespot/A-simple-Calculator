"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog10 = void 0;
var _index = require("../../plain/number/index.js");
var _bigint = require("../../utils/bigint.js");
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
const name = 'log10';
const dependencies = ['typed', 'config', 'Complex'];
const log16 = (0, _index.log10Number)(16);
const createLog10 = exports.createLog10 = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    Complex
  } = _ref;
  /**
   * Calculate the 10-base logarithm of a value. This is the same as calculating `log(x, 10)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log10(x)
   *
   * Examples:
   *
   *    math.log10(0.00001)            // returns -5
   *    math.log10(10000)              // returns 4
   *    math.log(10000) / math.log(10) // returns 4
   *    math.pow(10, 4)                // returns 10000
   *
   * See also:
   *
   *    exp, log, log1p, log2
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the 10-base logarithm of `x`
   */

  function complexLog(c) {
    return c.log().div(Math.LN10);
  }
  function complexLogNumber(x) {
    return complexLog(new Complex(x, 0));
  }
  return typed(name, {
    number: function (x) {
      if (x >= 0 || config.predictable) {
        return (0, _index.log10Number)(x);
      } else {
        // negative value -> complex value computation
        return complexLogNumber(x);
      }
    },
    bigint: (0, _bigint.promoteLogarithm)(log16, _index.log10Number, config, complexLogNumber),
    Complex: complexLog,
    BigNumber: function (x) {
      if (!x.isNegative() || config.predictable) {
        return x.log();
      } else {
        // downgrade to number, return Complex valued result
        return complexLogNumber(x.toNumber());
      }
    },
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
  });
});