"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEqualScalarNumber = exports.createEqualScalar = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _complex = require("../../utils/complex.js");
var _compareUnits = require("./compareUnits.js");
const name = 'equalScalar';
const dependencies = ['typed', 'config'];
const createEqualScalar = exports.createEqualScalar = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config
  } = _ref;
  const compareUnits = (0, _compareUnits.createCompareUnits)({
    typed
  });

  /**
   * Test whether two scalar values are nearly equal.
   *
   * @param  {number | BigNumber | bigint | Fraction | boolean | Complex | Unit} x   First value to compare
   * @param  {number | BigNumber | bigint | Fraction | boolean | Complex} y          Second value to compare
   * @return {boolean}                                                  Returns true when the compared values are equal, else returns false
   * @private
   */
  return typed(name, {
    'boolean, boolean': function (x, y) {
      return x === y;
    },
    'number, number': function (x, y) {
      return (0, _number.nearlyEqual)(x, y, config.relTol, config.absTol);
    },
    'BigNumber, BigNumber': function (x, y) {
      return x.eq(y) || (0, _nearlyEqual.nearlyEqual)(x, y, config.relTol, config.absTol);
    },
    'bigint, bigint': function (x, y) {
      return x === y;
    },
    'Fraction, Fraction': function (x, y) {
      return x.equals(y);
    },
    'Complex, Complex': function (x, y) {
      return (0, _complex.complexEquals)(x, y, config.relTol, config.absTol);
    }
  }, compareUnits);
});
const createEqualScalarNumber = exports.createEqualScalarNumber = (0, _factory.factory)(name, ['typed', 'config'], _ref2 => {
  let {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function (x, y) {
      return (0, _number.nearlyEqual)(x, y, config.relTol, config.absTol);
    }
  });
});