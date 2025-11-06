"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAcosh = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
const name = 'acosh';
const dependencies = ['typed', 'config', 'Complex'];
const createAcosh = exports.createAcosh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    Complex
  } = _ref;
  /**
   * Calculate the hyperbolic arccos of a value,
   * defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.acosh(x)
   *
   * Examples:
   *
   *    math.acosh(1.5)       // returns 0.9624236501192069
   *
   * See also:
   *
   *    cosh, asinh, atanh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arccosine of x
   */
  return typed(name, {
    number: function (x) {
      if (x >= 1 || config.predictable) {
        return (0, _index.acoshNumber)(x);
      }
      if (x <= -1) {
        return new Complex(Math.log(Math.sqrt(x * x - 1) - x), Math.PI);
      }
      return new Complex(x, 0).acosh();
    },
    Complex: function (x) {
      return x.acosh();
    },
    BigNumber: function (x) {
      return x.acosh();
    }
  });
});