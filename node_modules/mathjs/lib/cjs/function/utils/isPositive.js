"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsPositive = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
const name = 'isPositive';
const dependencies = ['typed', 'config'];
const createIsPositive = exports.createIsPositive = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config
  } = _ref;
  /**
   * Test whether a value is positive: larger than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isPositive(x)
   *
   * Examples:
   *
   *    math.isPositive(3)                     // returns true
   *    math.isPositive(-2)                    // returns false
   *    math.isPositive(0)                     // returns false
   *    math.isPositive(-0)                    // returns false
   *    math.isPositive(0.5)                   // returns true
   *    math.isPositive(math.bignumber(2))     // returns true
   *    math.isPositive(math.fraction(-2, 5))  // returns false
   *    math.isPositive(math.fraction(1, 3))   // returns true
   *    math.isPositive('2')                   // returns true
   *    math.isPositive([2, 0, -3])            // returns [true, false, false]
   *
   * See also:
   *
   *    isNumeric, isZero, isNegative, isInteger
   *
   * @param {number | BigNumber | bigint | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  return typed(name, {
    number: x => (0, _number.nearlyEqual)(x, 0, config.relTol, config.absTol) ? false : (0, _index.isPositiveNumber)(x),
    BigNumber: x => (0, _nearlyEqual.nearlyEqual)(x, new x.constructor(0), config.relTol, config.absTol) ? false : !x.isNeg() && !x.isZero() && !x.isNaN(),
    bigint: x => x > 0n,
    Fraction: x => x.s > 0n && x.n > 0n,
    Unit: typed.referToSelf(self => x => typed.find(self, x.valueType())(x.value)),
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
  });
});