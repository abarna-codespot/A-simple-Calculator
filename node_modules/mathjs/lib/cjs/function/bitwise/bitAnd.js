"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitAnd = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo06xS0S = require("../../type/matrix/utils/matAlgo06xS0S0.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'bitAnd';
const dependencies = ['typed', 'matrix', 'equalScalar', 'concat'];
const createBitAnd = exports.createBitAnd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    concat
  } = _ref;
  const matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed,
    equalScalar
  });
  const matAlgo06xS0S0 = (0, _matAlgo06xS0S.createMatAlgo06xS0S0)({
    typed,
    equalScalar
  });
  const matAlgo11xS0s = (0, _matAlgo11xS0s.createMatAlgo11xS0s)({
    typed,
    equalScalar
  });
  const matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed,
    matrix,
    concat
  });

  /**
   * Bitwise AND two values, `x & y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.bitAnd(x, y)
   *
   * Examples:
   *
   *    math.bitAnd(53, 131)               // returns number 1
   *
   *    math.bitAnd([1, 12, 31], 42)       // returns Array [0, 8, 10]
   *
   * See also:
   *
   *    bitNot, bitOr, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | bigint | Array | Matrix} x First value to and
   * @param  {number | BigNumber | bigint | Array | Matrix} y Second value to and
   * @return {number | BigNumber | bigint | Array | Matrix} AND of `x` and `y`
   */
  return typed(name, {
    'number, number': _index.bitAndNumber,
    'BigNumber, BigNumber': _bitwise.bitAndBigNumber,
    'bigint, bigint': (x, y) => x & y
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }));
});