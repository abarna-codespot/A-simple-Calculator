import { factory } from '../../utils/factory.js';
import { deepMap } from '../../utils/collection.js';
import { unaryPlusNumber } from '../../plain/number/index.js';
import { safeNumberType } from '../../utils/number.js';
var name = 'unaryPlus';
var dependencies = ['typed', 'config', 'numeric'];
export var createUnaryPlus = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    numeric
  } = _ref;
  /**
   * Unary plus operation.
   * Boolean values and strings will be converted to a number, numeric values will be returned as is.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.unaryPlus(x)
   *
   * Examples:
   *
   *    math.unaryPlus(3.5)      // returns 3.5
   *    math.unaryPlus(1)     // returns 1
   *
   * See also:
   *
   *    unaryMinus, add, subtract
   *
   * @param  {number | BigNumber | bigint | Fraction | string | Complex | Unit | Array | Matrix} x
   *            Input value
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix}
   *            Returns the input value when numeric, converts to a number when input is non-numeric.
   */
  return typed(name, {
    number: unaryPlusNumber,
    Complex: function Complex(x) {
      return x; // complex numbers are immutable
    },
    BigNumber: function BigNumber(x) {
      return x; // bignumbers are immutable
    },
    bigint: function bigint(x) {
      return x;
    },
    Fraction: function Fraction(x) {
      return x; // fractions are immutable
    },
    Unit: function Unit(x) {
      return x.clone();
    },
    // deep map collection, skip zeros since unaryPlus(0) = 0
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self, true)),
    boolean: function boolean(x) {
      return numeric(x ? 1 : 0, config.number);
    },
    string: function string(x) {
      return numeric(x, safeNumberType(x, config));
    }
  });
});