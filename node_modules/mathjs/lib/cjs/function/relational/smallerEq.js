"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSmallerEqNumber = exports.createSmallerEq = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _compareUnits = require("./compareUnits.js");
const name = 'smallerEq';
const dependencies = ['typed', 'config', 'matrix', 'DenseMatrix', 'concat', 'SparseMatrix'];
const createSmallerEq = exports.createSmallerEq = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    matrix,
    DenseMatrix,
    concat,
    SparseMatrix
  } = _ref;
  const matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed
  });
  const matAlgo07xSSf = (0, _matAlgo07xSSf.createMatAlgo07xSSf)({
    typed,
    SparseMatrix
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
   * Test whether value x is smaller or equal to y.
   *
   * The function returns true when x is smaller than y or the relative
   * difference between x and y is smaller than the configured relTol and absTol. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.smallerEq(x, y)
   *
   * Examples:
   *
   *    math.smaller(1 + 2, 3)        // returns false
   *    math.smallerEq(1 + 2, 3)      // returns true
   *
   * See also:
   *
   *    equal, unequal, smaller, larger, largerEq, compare
   *
   * @param  {number | BigNumber | bigint | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | bigint | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is smaller than y, else returns false
   */
  return typed(name, createSmallerEqNumber({
    typed,
    config
  }), {
    'boolean, boolean': (x, y) => x <= y,
    'BigNumber, BigNumber': function (x, y) {
      return x.lte(y) || (0, _nearlyEqual.nearlyEqual)(x, y, config.relTol, config.absTol);
    },
    'bigint, bigint': (x, y) => x <= y,
    'Fraction, Fraction': (x, y) => x.compare(y) !== 1,
    'Complex, Complex': function () {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
const createSmallerEqNumber = exports.createSmallerEqNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config'], _ref2 => {
  let {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function (x, y) {
      return x <= y || (0, _number.nearlyEqual)(x, y, config.relTol, config.absTol);
    }
  });
});