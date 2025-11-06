"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMod = void 0;
var _factory = require("../../utils/factory.js");
var _floor = require("./floor.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
const name = 'mod';
const dependencies = ['typed', 'config', 'round', 'matrix', 'equalScalar', 'zeros', 'DenseMatrix', 'concat'];
const createMod = exports.createMod = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    round,
    matrix,
    equalScalar,
    zeros,
    DenseMatrix,
    concat
  } = _ref;
  const floor = (0, _floor.createFloor)({
    typed,
    config,
    round,
    matrix,
    equalScalar,
    zeros,
    DenseMatrix
  });
  const matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed,
    equalScalar
  });
  const matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed
  });
  const matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
    typed,
    equalScalar
  });
  const matAlgo11xS0s = (0, _matAlgo11xS0s.createMatAlgo11xS0s)({
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

  /**
   * Calculates the modulus, the remainder of an integer division.
   *
   * For matrices, the function is evaluated element wise.
   *
   * The modulus is defined as:
   *
   *     x - y * floor(x / y)
   *
   * See https://en.wikipedia.org/wiki/Modulo_operation.
   *
   * Syntax:
   *
   *    math.mod(x, y)
   *
   * Examples:
   *
   *    math.mod(8, 3)                // returns 2
   *    math.mod(11, 2)               // returns 1
   *
   *    function isOdd(x) {
   *      return math.mod(x, 2) != 0
   *    }
   *
   *    isOdd(2)                      // returns false
   *    isOdd(3)                      // returns true
   *
   * See also:
   *
   *    divide
   *
   * @param  {number | BigNumber | bigint | Fraction | Array | Matrix} x Dividend
   * @param  {number | BigNumber | bigint | Fraction | Array | Matrix} y Divisor
   * @return {number | BigNumber | bigint | Fraction | Array | Matrix} Returns the remainder of `x` divided by `y`.
   */
  return typed(name, {
    'number, number': _modNumber,
    'BigNumber, BigNumber': function (x, y) {
      return y.isZero() ? x : x.sub(y.mul(floor(x.div(y))));
    },
    'bigint, bigint': function (x, y) {
      if (y === 0n) {
        return x;
      }
      if (x < 0) {
        const m = x % y;
        return m === 0n ? m : m + y;
      }
      return x % y;
    },
    'Fraction, Fraction': function (x, y) {
      return y.equals(0) ? x : x.sub(y.mul(floor(x.div(y))));
    }
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));

  /**
  * Calculate the modulus of two numbers
  * @param {number} x
  * @param {number} y
  * @returns {number} res
  * @private
  */
  function _modNumber(x, y) {
    // We don't use JavaScript's % operator here as this doesn't work
    // correctly for x < 0 and x === 0
    // see https://en.wikipedia.org/wiki/Modulo_operation

    // We use mathjs floor to handle errors associated with
    // precision float approximation
    return y === 0 ? x : x - y * floor(x / y);
  }
});