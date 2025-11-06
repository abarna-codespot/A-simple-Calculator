"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnaryMinus = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _index = require("../../plain/number/index.js");
const name = 'unaryMinus';
const dependencies = ['typed'];
const createUnaryMinus = exports.createUnaryMinus = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Inverse the sign of a value, apply a unary minus operation.
   *
   * For matrices, the function is evaluated element wise. Boolean values and
   * strings will be converted to a number. For complex numbers, both real and
   * complex value are inverted.
   *
   * Syntax:
   *
   *    math.unaryMinus(x)
   *
   * Examples:
   *
   *    math.unaryMinus(3.5)      // returns -3.5
   *    math.unaryMinus(-4.2)     // returns 4.2
   *
   * See also:
   *
   *    add, subtract, unaryPlus
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} x Number to be inverted.
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} Returns the value with inverted sign.
   */
  return typed(name, {
    number: _index.unaryMinusNumber,
    'Complex | BigNumber | Fraction': x => x.neg(),
    bigint: x => -x,
    Unit: typed.referToSelf(self => x => {
      const res = x.clone();
      res.value = typed.find(self, res.valueType())(x.value);
      return res;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self, true))

    // TODO: add support for string
  });
});