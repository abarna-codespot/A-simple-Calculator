"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdd = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo04xSidSid = require("../../type/matrix/utils/matAlgo04xSidSid.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
const name = 'add';
const dependencies = ['typed', 'matrix', 'addScalar', 'equalScalar', 'DenseMatrix', 'SparseMatrix', 'concat'];
const createAdd = exports.createAdd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    addScalar,
    equalScalar,
    DenseMatrix,
    SparseMatrix,
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
   * Add two or more values, `x + y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.add(x, y)
   *    math.add(x, y, z, ...)
   *
   * Examples:
   *
   *    math.add(2, 3)               // returns number 5
   *    math.add(2, 3, 4)            // returns number 9
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(-4, 1)
   *    math.add(a, b)               // returns Complex -2 + 4i
   *
   *    math.add([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   *    const c = math.unit('5 cm')
   *    const d = math.unit('2.1 mm')
   *    math.add(c, d)               // returns Unit 52.1 mm
   *
   *    math.add("2.3", "4")         // returns number 6.3
   *
   * See also:
   *
   *    subtract, sum
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} x First value to add
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} y Second value to add
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit | Array | Matrix} Sum of `x` and `y`
   */
  return typed(name, {
    'any, any': addScalar,
    'any, any, ...any': typed.referToSelf(self => (x, y, rest) => {
      let result = self(x, y);
      for (let i = 0; i < rest.length; i++) {
        result = self(result, rest[i]);
      }
      return result;
    })
  }, matrixAlgorithmSuite({
    elop: addScalar,
    DS: matAlgo01xDSid,
    SS: matAlgo04xSidSid,
    Ss: matAlgo10xSids
  }));
});