import { factory } from '../../utils/factory.js';
import { acothNumber } from '../../plain/number/index.js';
var name = 'acoth';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
export var createAcoth = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex,
    BigNumber: _BigNumber
  } = _ref;
  /**
   * Calculate the inverse hyperbolic tangent of a value,
   * defined as `acoth(x) = atanh(1/x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.
   *
   * To avoid confusion with the matrix inverse hyperbolic tangent, this
   * function does not apply to matrices.
   *
   * Syntax:
   *
   *    math.acoth(x)
   *
   * Examples:
   *
   *    math.acoth(0.5)     // returns 0.5493061443340548 - 1.5707963267948966i
   *
   * See also:
   *
   *    acsch, asech
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arccotangent of x
   */
  return typed(name, {
    number: function number(x) {
      if (x >= 1 || x <= -1 || config.predictable) {
        return acothNumber(x);
      }
      return new Complex(x, 0).acoth();
    },
    Complex: function Complex(x) {
      return x.acoth();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).atanh();
    }
  });
});