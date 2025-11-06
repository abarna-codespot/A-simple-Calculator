"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnequalNumber = exports.createUnequal = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
const name = 'unequal';
const dependencies = ['typed', 'config', 'equalScalar', 'matrix', 'DenseMatrix', 'concat', 'SparseMatrix'];
const createUnequal = exports.createUnequal = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    equalScalar,
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

  /**
   * Test whether two values are unequal.
   *
   * The function tests whether the relative difference between x and y is
   * larger than the configured relTol and absTol. The function cannot be used to compare
   * values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * In case of complex numbers, x.re must unequal y.re, or x.im must unequal y.im.
   * Strings are compared by their numerical value.
   *
   * Values `null` and `undefined` are compared strictly, thus `null` is unequal
   * with everything except `null`, and `undefined` is unequal with everything
   * except `undefined`.
   *
   * Syntax:
   *
   *    math.unequal(x, y)
   *
   * Examples:
   *
   *    math.unequal(2 + 2, 3)       // returns true
   *    math.unequal(2 + 2, 4)       // returns false
   *
   *    const a = math.unit('50 cm')
   *    const b = math.unit('5 m')
   *    math.unequal(a, b)           // returns false
   *
   *    const c = [2, 5, 1]
   *    const d = [2, 7, 1]
   *
   *    math.unequal(c, d)           // returns [false, true, false]
   *    math.deepEqual(c, d)         // returns false
   *
   *    math.unequal(0, null)        // returns true
   * See also:
   *
   *    equal, deepEqual, smaller, smallerEq, larger, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit | string | Array | Matrix | undefined} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit | string | Array | Matrix | undefined} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the compared values are unequal, else returns false
   */
  return typed(name, createUnequalNumber({
    typed,
    equalScalar
  }), matrixAlgorithmSuite({
    elop: _unequal,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
  function _unequal(x, y) {
    return !equalScalar(x, y);
  }
});
const createUnequalNumber = exports.createUnequalNumber = (0, _factory.factory)(name, ['typed', 'equalScalar'], _ref2 => {
  let {
    typed,
    equalScalar
  } = _ref2;
  return typed(name, {
    'any, any': function (x, y) {
      // strict equality for null and undefined?
      if (x === null) {
        return y !== null;
      }
      if (y === null) {
        return x !== null;
      }
      if (x === undefined) {
        return y !== undefined;
      }
      if (y === undefined) {
        return x !== undefined;
      }
      return !equalScalar(x, y);
    }
  });
});