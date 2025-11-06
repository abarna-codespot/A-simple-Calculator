"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSign = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _index = require("../../plain/number/index.js");
const name = 'sign';
const dependencies = ['typed', 'BigNumber', 'Fraction', 'complex'];
const createSign = exports.createSign = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    BigNumber,
    complex,
    Fraction
  } = _ref;
  /**
   * Compute the sign of a value. The sign of a value x is:
   *
   * -  1 when x > 0
   * - -1 when x < 0
   * -  0 when x == 0
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.sign(x)
   *
   * Examples:
   *
   *    math.sign(3.5)               // returns 1
   *    math.sign(-4.2)              // returns -1
   *    math.sign(0)                 // returns 0
   *
   *    math.sign([3, 5, -2, 0, 2])  // returns [1, 1, -1, 0, 1]
   *
   * See also:
   *
   *    abs
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Array | Matrix | Unit} x
   *            The number for which to determine the sign
   * @return {number | BigNumber | bigint | Fraction | Complex | Array | Matrix | Unit}
   *            The sign of `x`
   */
  return typed(name, {
    number: _index.signNumber,
    Complex: function (x) {
      return x.im === 0 ? complex((0, _index.signNumber)(x.re)) : x.sign();
    },
    BigNumber: function (x) {
      return new BigNumber(x.cmp(0));
    },
    bigint: function (x) {
      return x > 0n ? 1n : x < 0n ? -1n : 0n;
    },
    Fraction: function (x) {
      return x.n === 0n ? new Fraction(0) : new Fraction(x.s);
    },
    // deep map collection, skip zeros since sign(0) = 0
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self, true)),
    Unit: typed.referToSelf(self => x => {
      if (!x._isDerived() && x.units[0].unit.offset !== 0) {
        throw new TypeError('sign is ambiguous for units with offset');
      }
      return typed.find(self, x.valueType())(x.value);
    })
  });
});