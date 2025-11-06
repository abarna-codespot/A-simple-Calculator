"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSplitUnit = void 0;
var _factory = require("../../../utils/factory.js");
const name = 'splitUnit';
const dependencies = ['typed'];
const createSplitUnit = exports.createSplitUnit = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Split a unit in an array of units whose sum is equal to the original unit.
   *
   * Syntax:
   *
   *     math.splitUnit(unit: Unit, parts: Array.<Unit>)
   *
   * Example:
   *
   *     math.splitUnit(new Unit(1, 'm'), ['feet', 'inch'])
   *     // [ 3 feet, 3.3700787401575 inch ]
   *
   * See also:
   *
   *     unit
   *
   * @param {Array} [parts] An array of strings or valueless units.
   * @return {Array} An array of units.
   */
  return typed(name, {
    'Unit, Array': function (unit, parts) {
      return unit.splitUnit(parts);
    }
  });
});