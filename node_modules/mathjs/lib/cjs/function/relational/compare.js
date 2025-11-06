"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompareNumber = exports.createCompare = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _compareUnits = require("./compareUnits.js");
const name = 'compare';
const dependencies = ['typed', 'config', 'matrix', 'equalScalar', 'BigNumber', 'Fraction', 'DenseMatrix', 'concat'];
const createCompare = exports.createCompare = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    equalScalar,
    matrix,
    BigNumber,
    Fraction,
    DenseMatrix,
    concat
  } = _ref;
  const matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed
  });
  const matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
    typed,
    equalScalar
  });
  const matAlgo12xSfs = (0, _matAlgo12xSfs.createMatAlgo12xSfs)({
    typed,
    DenseMatrix
  });
  const matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed,
    matrix,
    concat
  });
  const compareUnits = (0, _compareUnits.createCompareUnits)({
    typed
  });

  /**
   * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * x and y are considered equal when the relative difference between x and y
   * is smaller than the configured absTol and relTol. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.compare(x, y)
   *
   * Examples:
   *
   *    math.compare(6, 1)           // returns 1
   *    math.compare(2, 3)           // returns -1
   *    math.compare(7, 7)           // returns 0
   *    math.compare('10', '2')      // returns 1
   *    math.compare('1000', '1e3')  // returns 0
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('40 mm')
   *    math.compare(a, b)           // returns 1
   *
   *    math.compare(2, [1, 2, 3])   // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, largerEq, compareNatural, compareText
   *
   * @param  {number | BigNumber | bigint | Fraction | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | bigint | Fraction | Unit | string | Array | Matrix} y Second value to compare
   * @return {number | BigNumber | bigint | Fraction | Array | Matrix} Returns the result of the comparison:
   *                                                          1 when x > y, -1 when x < y, and 0 when x == y.
   */
  return typed(name, createCompareNumber({
    typed,
    config
  }), {
    'boolean, boolean': function (x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    'BigNumber, BigNumber': function (x, y) {
      return (0, _nearlyEqual.nearlyEqual)(x, y, config.relTol, config.absTol) ? new BigNumber(0) : new BigNumber(x.cmp(y));
    },
    'bigint, bigint': function (x, y) {
      return x === y ? 0n : x > y ? 1n : -1n;
    },
    'Fraction, Fraction': function (x, y) {
      return new Fraction(x.compare(y));
    },
    'Complex, Complex': function () {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
const createCompareNumber = exports.createCompareNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config'], _ref2 => {
  let {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function (x, y) {
      return (0, _number.nearlyEqual)(x, y, config.relTol, config.absTol) ? 0 : x > y ? 1 : -1;
    }
  });
});