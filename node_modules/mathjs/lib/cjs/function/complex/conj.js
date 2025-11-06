"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConj = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
const name = 'conj';
const dependencies = ['typed'];
const createConj = exports.createConj = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Compute the complex conjugate of a complex value.
   * If `x = a+bi`, the complex conjugate of `x` is `a - bi`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.conj(x)
   *
   * Examples:
   *
   *    math.conj(math.complex('2 + 3i'))  // returns Complex 2 - 3i
   *    math.conj(math.complex('2 - 3i'))  // returns Complex 2 + 3i
   *    math.conj(math.complex('-5.2i'))  // returns Complex 5.2i
   *
   * See also:
   *
   *    re, im, arg, abs
   *
   * @param {number | BigNumber | Complex | Array | Matrix | Unit} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Complex | Array | Matrix | Unit}
   *            The complex conjugate of x
   */
  return typed(name, {
    'number | BigNumber | Fraction': x => x,
    Complex: x => x.conjugate(),
    Unit: typed.referToSelf(self => x => new x.constructor(self(x.toNumeric()), x.formatUnits())),
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
  });
});