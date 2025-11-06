"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog2 = void 0;
var _index = require("../../plain/number/index.js");
var _bigint = require("../../utils/bigint.js");
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
const name = 'log2';
const dependencies = ['typed', 'config', 'Complex'];
const createLog2 = exports.createLog2 = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    Complex
  } = _ref;
  /**
   * Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log2(x)
   *
   * Examples:
   *
   *    math.log2(0.03125)           // returns -5
   *    math.log2(16)                // returns 4
   *    math.log2(16) / math.log2(2) // returns 4
   *    math.pow(2, 4)               // returns 16
   *
   * See also:
   *
   *    exp, log, log1p, log10
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the 2-base logarithm of `x`
   */
  function complexLog2Number(x) {
    return _log2Complex(new Complex(x, 0));
  }
  return typed(name, {
    number: function (x) {
      if (x >= 0 || config.predictable) {
        return (0, _index.log2Number)(x);
      } else {
        // negative value -> complex value computation
        return complexLog2Number(x);
      }
    },
    bigint: (0, _bigint.promoteLogarithm)(4, _index.log2Number, config, complexLog2Number),
    Complex: _log2Complex,
    BigNumber: function (x) {
      if (!x.isNegative() || config.predictable) {
        return x.log(2);
      } else {
        // downgrade to number, return Complex valued result
        return complexLog2Number(x.toNumber());
      }
    },
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
  });

  /**
   * Calculate log2 for a complex value
   * @param {Complex} x
   * @returns {Complex}
   * @private
   */
  function _log2Complex(x) {
    const newX = Math.sqrt(x.re * x.re + x.im * x.im);
    return new Complex(Math.log2 ? Math.log2(newX) : Math.log(newX) / Math.LN2, Math.atan2(x.im, x.re) / Math.LN2);
  }
});