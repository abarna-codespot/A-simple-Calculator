"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCot = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var _trigUnit = require("./trigUnit.js");
const name = 'cot';
const dependencies = ['typed', 'BigNumber'];
const createCot = exports.createCot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    BigNumber
  } = _ref;
  const trigUnit = (0, _trigUnit.createTrigUnit)({
    typed
  });

  /**
   * Calculate the cotangent of a value. Defined as `cot(x) = 1 / tan(x)`.
   *
   * To avoid confusion with the matrix cotangent, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.cot(x)
   *
   * Examples:
   *
   *    math.cot(2)      // returns number -0.45765755436028577
   *    1 / math.tan(2)  // returns number -0.45765755436028577
   *
   * See also:
   *
   *    tan, sec, csc
   *
   * @param {number | Complex | Unit | Array | Matrix} x  Function input
   * @return {number | Complex | Array | Matrix} Cotangent of x
   */
  return typed(name, {
    number: _index.cotNumber,
    Complex: x => x.cot(),
    BigNumber: x => new BigNumber(1).div(x.tan())
  }, trigUnit);
});