"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitXor = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'bitXor';
const dependencies = ['typed', 'matrix', 'DenseMatrix', 'concat', 'SparseMatrix'];
const createBitXor = exports.createBitXor = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
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
   * Bitwise XOR two values, `x ^ y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.bitXor(x, y)
   *
   * Examples:
   *
   *    math.bitXor(1, 2)               // returns number 3
   *
   *    math.bitXor([2, 3, 4], 4)       // returns Array [6, 7, 0]
   *
   * See also:
   *
   *    bitAnd, bitNot, bitOr, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | bigint | Array | Matrix} x First value to xor
   * @param  {number | BigNumber | bigint | Array | Matrix} y Second value to xor
   * @return {number | BigNumber | bigint | Array | Matrix} XOR of `x` and `y`
   */
  return typed(name, {
    'number, number': _index.bitXorNumber,
    'BigNumber, BigNumber': _bitwise.bitXor,
    'bigint, bigint': (x, y) => x ^ y
  }, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});