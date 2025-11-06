import { factory } from '../../utils/factory.js';
var name = 'divideScalar';
var dependencies = ['typed', 'numeric'];
export var createDivideScalar = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    numeric
  } = _ref;
  /**
   * Divide two scalar values, `x / y`.
   * This function is meant for internal use: it is used by the public functions
   * `divide` and `inv`.
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit} x   Numerator
   * @param  {number | BigNumber | bigint | Fraction | Complex} y          Denominator
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit}     Quotient, `x / y`
   * @private
   */
  return typed(name, {
    'number, number': function number_number(x, y) {
      return x / y;
    },
    'Complex, Complex': function Complex_Complex(x, y) {
      return x.div(y);
    },
    'BigNumber, BigNumber': function BigNumber_BigNumber(x, y) {
      return x.div(y);
    },
    'bigint, bigint': function bigint_bigint(x, y) {
      return x / y;
    },
    'Fraction, Fraction': function Fraction_Fraction(x, y) {
      return x.div(y);
    },
    'Unit, number | Complex | Fraction | BigNumber | Unit': (x, y) => x.divide(y),
    'number | Fraction | Complex | BigNumber, Unit': (x, y) => y.divideInto(x)
  });
});