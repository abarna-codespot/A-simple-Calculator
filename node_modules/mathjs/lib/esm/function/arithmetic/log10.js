import { log10Number } from '../../plain/number/index.js';
import { promoteLogarithm } from '../../utils/bigint.js';
import { deepMap } from '../../utils/collection.js';
import { factory } from '../../utils/factory.js';
var name = 'log10';
var dependencies = ['typed', 'config', 'Complex'];
var log16 = log10Number(16);
export var createLog10 = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
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
    number: function number(x) {
      if (x >= 0 || config.predictable) {
        return log10Number(x);
      } else {
        // negative value -> complex value computation
        return complexLogNumber(x);
      }
    },
    bigint: promoteLogarithm(log16, log10Number, config, complexLogNumber),
    Complex: complexLog,
    BigNumber: function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.log();
      } else {
        // downgrade to number, return Complex valued result
        return complexLogNumber(x.toNumber());
      }
    },
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self))
  });
});