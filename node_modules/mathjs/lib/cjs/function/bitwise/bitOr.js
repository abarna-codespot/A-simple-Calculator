"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitOr = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _factory = require("../../utils/factory.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matAlgo04xSidSid = require("../../type/matrix/utils/matAlgo04xSidSid.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'bitOr';
const dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
const createBitOr = exports.createBitOr = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  const matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed
  });
  const matAlgo04xSidSid = (0, _matAlgo04xSidSid.createMatAlgo04xSidSid)({
    typed,
    equalScalar
  });
  const matAlgo10xSids = (0, _matAlgo10xSids.createMatAlgo10xSids)({
    typed,
    DenseMatrix
  });
  const matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed,
    matrix,
    concat
  });

  /**
   * Bitwise OR two values, `x | y`.
   * For matrices, the function is evaluated element wise.
   * For units, the function is evaluated on the lowest print base.
   *
   * Syntax:
   *
   *    math.bitOr(x, y)
   *
   * Examples:
   *
   *    math.bitOr(1, 2)               // returns number 3
   *
   *    math.bitOr([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   * See also:
   *
   *    bitAnd, bitNot, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | bigint | Array | Matrix} x First value to or
   * @param  {number | BigNumber | bigint | Array | Matrix} y Second value to or
   * @return {number | BigNumber | bigint | Array | Matrix} OR of `x` and `y`
   */
  return typed(name, {
    'number, number': _index.bitOrNumber,
    'BigNumber, BigNumber': _bitwise.bitOrBigNumber,
    'bigint, bigint': (x, y) => x | y
  }, matrixAlgorithmSuite({
    SS: matAlgo04xSidSid,
    DS: matAlgo01xDSid,
    Ss: matAlgo10xSids
  }));
});