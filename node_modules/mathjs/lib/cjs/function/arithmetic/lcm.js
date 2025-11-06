"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLcm = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo06xS0S = require("../../type/matrix/utils/matAlgo06xS0S0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'lcm';
const dependencies = ['typed', 'matrix', 'equalScalar', 'concat'];
const createLcm = exports.createLcm = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
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
  const lcmTypes = 'number | BigNumber | Fraction | Matrix | Array';
  const lcmManySignature = {};
  lcmManySignature[`${lcmTypes}, ${lcmTypes}, ...${lcmTypes}`] = typed.referToSelf(self => (a, b, args) => {
    let res = self(a, b);
    for (let i = 0; i < args.length; i++) {
      res = self(res, args[i]);
    }
    return res;
  });

  /**
   * Calculate the least common multiple for two or more values or arrays.
   *
   * lcm is defined as:
   *
   *     lcm(a, b) = abs(a * b) / gcd(a, b)
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.lcm(a, b)
   *    math.lcm(a, b, c, ...)
   *
   * Examples:
   *
   *    math.lcm(4, 6)               // returns 12
   *    math.lcm(6, 21)              // returns 42
   *    math.lcm(6, 21, 5)           // returns 210
   *
   *    math.lcm([4, 6], [6, 21])    // returns [12, 42]
   *
   * See also:
   *
   *    gcd, xgcd
   *
   * @param {... number | BigNumber | Array | Matrix} args  Two or more integer numbers
   * @return {number | BigNumber | Array | Matrix}                           The least common multiple
   */
  return typed(name, {
    'number, number': _index.lcmNumber,
    'BigNumber, BigNumber': _lcmBigNumber,
    'Fraction, Fraction': (x, y) => x.lcm(y)
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }), lcmManySignature);

  /**
   * Calculate lcm for two BigNumbers
   * @param {BigNumber} a
   * @param {BigNumber} b
   * @returns {BigNumber} Returns the least common multiple of a and b
   * @private
   */
  function _lcmBigNumber(a, b) {
    if (!a.isInt() || !b.isInt()) {
      throw new Error('Parameters in function lcm must be integer numbers');
    }
    if (a.isZero()) {
      return a;
    }
    if (b.isZero()) {
      return b;
    }

    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    // evaluate lcm here inline to reduce overhead
    const prod = a.times(b);
    while (!b.isZero()) {
      const t = b;
      b = a.mod(t);
      a = t;
    }
    return prod.div(a).abs();
  }
});