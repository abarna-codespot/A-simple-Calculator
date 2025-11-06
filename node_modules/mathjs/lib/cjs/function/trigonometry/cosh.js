"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCosh = void 0;
var _factory = require("../../utils/factory.js");
var _number = require("../../utils/number.js");
const name = 'cosh';
const dependencies = ['typed'];
const createCosh = exports.createCosh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Calculate the hyperbolic cosine of a value,
   * defined as `cosh(x) = 1/2 * (exp(x) + exp(-x))`.
   *
   * To avoid confusion with the matrix hyperbolic cosine, this function does
   * not apply to matrices.
   *
   * Syntax:
   *
   *    math.cosh(x)
   *
   * Examples:
   *
   *    math.cosh(0.5)       // returns number 1.1276259652063807
   *
   * See also:
   *
   *    sinh, tanh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic cosine of x
   */
  return typed(name, {
    number: _number.cosh,
    'Complex | BigNumber': x => x.cosh()
  });
});