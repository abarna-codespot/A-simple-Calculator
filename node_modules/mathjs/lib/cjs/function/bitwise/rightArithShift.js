"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRightArithShift = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo14xDs = require("../../type/matrix/utils/matAlgo14xDs.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matAlgo08xS0Sid = require("../../type/matrix/utils/matAlgo08xS0Sid.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _useMatrixForArrayScalar = require("./useMatrixForArrayScalar.js");
var _index = require("../../plain/number/index.js");
const name = 'rightArithShift';
const dependencies = ['typed', 'matrix', 'equalScalar', 'zeros', 'DenseMatrix', 'concat'];
const createRightArithShift = exports.createRightArithShift = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    zeros,
    DenseMatrix,
    concat
  } = _ref;
  const matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed
  });
  const matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed,
    equalScalar
  });
  const matAlgo08xS0Sid = (0, _matAlgo08xS0Sid.createMatAlgo08xS0Sid)({
    typed,
    equalScalar
  });
  const matAlgo10xSids = (0, _matAlgo10xSids.createMatAlgo10xSids)({
    typed,
    DenseMatrix
  });
  const matAlgo11xS0s = (0, _matAlgo11xS0s.createMatAlgo11xS0s)({
    typed,
    equalScalar
  });
  const matAlgo14xDs = (0, _matAlgo14xDs.createMatAlgo14xDs)({
    typed
  });
  const matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed,
    matrix,
    concat
  });
  const useMatrixForArrayScalar = (0, _useMatrixForArrayScalar.createUseMatrixForArrayScalar)({
    typed,
    matrix
  });

  /**
   * Bitwise right arithmetic shift of a value x by y number of bits, `x >> y`.
   * For matrices, the function is evaluated element wise.
   * For units, the function is evaluated on the best prefix base.
   *
   * Syntax:
   *
   *    math.rightArithShift(x, y)
   *
   * Examples:
   *
   *    math.rightArithShift(4, 2)               // returns number 1
   *
   *    math.rightArithShift([16, -32, 64], 4)   // returns Array [1, -2, 4]
   *
   * See also:
   *
   *    bitAnd, bitNot, bitOr, bitXor, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | bigint | Array | Matrix} x Value to be shifted
   * @param  {number | BigNumber | bigint} y Amount of shifts
   * @return {number | BigNumber | bigint | Array | Matrix} `x` zero-filled shifted right `y` times
   */
  return typed(name, {
    'number, number': _index.rightArithShiftNumber,
    'BigNumber, BigNumber': _bitwise.rightArithShiftBigNumber,
    'bigint, bigint': (x, y) => x >> y,
    'SparseMatrix, number | BigNumber': typed.referToSelf(self => (x, y) => {
      // check scalar
      if (equalScalar(y, 0)) {
        return x.clone();
      }
      return matAlgo11xS0s(x, y, self, false);
    }),
    'DenseMatrix, number | BigNumber': typed.referToSelf(self => (x, y) => {
      // check scalar
      if (equalScalar(y, 0)) {
        return x.clone();
      }
      return matAlgo14xDs(x, y, self, false);
    }),
    'number | BigNumber, SparseMatrix': typed.referToSelf(self => (x, y) => {
      // check scalar
      if (equalScalar(x, 0)) {
        return zeros(y.size(), y.storage());
      }
      return matAlgo10xSids(y, x, self, true);
    }),
    'number | BigNumber, DenseMatrix': typed.referToSelf(self => (x, y) => {
      // check scalar
      if (equalScalar(x, 0)) {
        return zeros(y.size(), y.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    })
  }, useMatrixForArrayScalar, matrixAlgorithmSuite({
    SS: matAlgo08xS0Sid,
    DS: matAlgo01xDSid,
    SD: matAlgo02xDS0
  }));
});