"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog = void 0;
var _factory = require("../../utils/factory.js");
var _bigint = require("../../utils/bigint.js");
var _index = require("../../plain/number/index.js");
const name = 'log';
const dependencies = ['config', 'typed', 'typeOf', 'divideScalar', 'Complex'];
const nlg16 = Math.log(16);
const createLog = exports.createLog = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    typeOf,
    config,
    divideScalar,
    Complex
  } = _ref;
  /**
   * Calculate the logarithm of a value.
   *
   * To avoid confusion with the matrix logarithm, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.log(x)
   *    math.log(x, base)
   *
   * Examples:
   *
   *    math.log(3.5)                  // returns 1.252762968495368
   *    math.exp(math.log(2.4))        // returns 2.4
   *
   *    math.pow(10, 4)                // returns 10000
   *    math.log(10000, 10)            // returns 4
   *    math.log(10000) / math.log(10) // returns 4
   *
   *    math.log(1024, 2)              // returns 10
   *    math.pow(2, 10)                // returns 1024
   *
   * See also:
   *
   *    exp, log2, log10, log1p
   *
   * @param {number | BigNumber | Fraction | Complex} x
   *            Value for which to calculate the logarithm.
   * @param {number | BigNumber | Fraction | Complex} [base=e]
   *            Optional base for the logarithm. If not provided, the natural
   *            logarithm of `x` is calculated.
   * @return {number | BigNumber | Fraction | Complex}
   *            Returns the logarithm of `x`
   */
  function complexLog(c) {
    return c.log();
  }
  function complexLogNumber(x) {
    return complexLog(new Complex(x, 0));
  }
  return typed(name, {
    number: function (x) {
      if (x >= 0 || config.predictable) {
        return (0, _index.logNumber)(x);
      } else {
        // negative value -> complex value computation
        return complexLogNumber(x);
      }
    },
    bigint: (0, _bigint.promoteLogarithm)(nlg16, _index.logNumber, config, complexLogNumber),
    Complex: complexLog,
    BigNumber: function (x) {
      if (!x.isNegative() || config.predictable) {
        return x.ln();
      } else {
        // downgrade to number, return Complex valued result
        return complexLogNumber(x.toNumber());
      }
    },
    'any, any': typed.referToSelf(self => (x, base) => {
      // calculate logarithm for a specified base, log(x, base)

      if (typeOf(x) === 'Fraction' && typeOf(base) === 'Fraction') {
        const result = x.log(base);
        if (result !== null) {
          return result;
        }
      }
      return divideScalar(self(x), self(base));
    })
  });
});