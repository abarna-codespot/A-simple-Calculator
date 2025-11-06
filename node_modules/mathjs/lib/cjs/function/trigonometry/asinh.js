"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAsinh = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
const name = 'asinh';
const dependencies = ['typed'];
const createAsinh = exports.createAsinh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Calculate the hyperbolic arcsine of a value,
   * defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.
   *
   * To avoid confusion with the matrix hyperbolic arcsine, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.asinh(x)
   *
   * Examples:
   *
   *    math.asinh(0.5)       // returns 0.48121182505960347
   *
   * See also:
   *
   *    acosh, atanh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arcsine of x
   */
  return typed('asinh', {
    number: _index.asinhNumber,
    Complex: function (x) {
      return x.asinh();
    },
    BigNumber: function (x) {
      return x.asinh();
    }
  });
});