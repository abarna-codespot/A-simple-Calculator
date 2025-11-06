"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTan = void 0;
var _factory = require("../../utils/factory.js");
var _trigUnit = require("./trigUnit.js");
const name = 'tan';
const dependencies = ['typed'];
const createTan = exports.createTan = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  const trigUnit = (0, _trigUnit.createTrigUnit)({
    typed
  });

  /**
   * Calculate the tangent of a value. `tan(x)` is equal to `sin(x) / cos(x)`.
   *
   * To avoid confusion with the matrix tangent, this function does not apply
   * to matrices.
   *
   * Syntax:
   *
   *    math.tan(x)
   *
   * Examples:
   *
   *    math.tan(0.5)                    // returns number 0.5463024898437905
   *    math.sin(0.5) / math.cos(0.5)    // returns number 0.5463024898437905
   *    math.tan(math.pi / 4)            // returns number 1
   *    math.tan(math.unit(45, 'deg'))   // returns number 1
   *
   * See also:
   *
   *    atan, sin, cos
   *
   * @param {number | BigNumber | Complex | Unit} x  Function input
   * @return {number | BigNumber | Complex} Tangent of x
   */
  return typed(name, {
    number: Math.tan,
    'Complex | BigNumber': x => x.tan()
  }, trigUnit);
});