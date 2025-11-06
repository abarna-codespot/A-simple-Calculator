"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSubtract = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
const name = 'subtract';
const dependencies = ['typed', 'matrix', 'equalScalar', 'subtractScalar', 'unaryMinus', 'DenseMatrix', 'concat'];
const createSubtract = exports.createSubtract = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    subtractScalar,
    unaryMinus,
    DenseMatrix,
    concat
  } = _ref;
  // TODO: split function subtract in two: subtract and subtractScalar

  const matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed
  });
  const matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed
  });
  const matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
    typed,
    equalScalar
  });
  const matAlgo10xSids = (0, _matAlgo10xSids.createMatAlgo10xSids)({
    typed,
    DenseMatrix
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
   * Subtract two values, `x - y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.subtract(x, y)
   *
   * Examples:
   *
   *    math.subtract(5.3, 2)        // returns number 3.3
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(4, 1)
   *    math.subtract(a, b)          // returns Complex -2 + 2i
   *
   *    math.subtract([5, 7, 4], 4)  // returns Array [1, 3, 0]
   *
   *    const c = math.unit('2.1 km')
   *    const d = math.unit('500m')
   *    math.subtract(c, d)          // returns Unit 1.6 km
   *
   * See also:
   *
   *    add
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} x Initial value
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} y Value to subtract from `x`
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} Subtraction of `x` and `y`
   */
  return typed(name, {
    'any, any': subtractScalar
  }, matrixAlgorithmSuite({
    elop: subtractScalar,
    SS: matAlgo05xSfSf,
    DS: matAlgo01xDSid,
    SD: matAlgo03xDSf,
    Ss: matAlgo12xSfs,
    sS: matAlgo10xSids
  }));
});