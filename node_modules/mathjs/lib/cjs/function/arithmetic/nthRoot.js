"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNthRootNumber = exports.createNthRoot = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo06xS0S = require("../../type/matrix/utils/matAlgo06xS0S0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'nthRoot';
const dependencies = ['typed', 'matrix', 'equalScalar', 'BigNumber', 'concat'];
const createNthRoot = exports.createNthRoot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    BigNumber,
    concat
  } = _ref;
  const matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed
  });
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
   * Calculate the nth root of a value.
   * The principal nth root of a positive real number A, is the positive real
   * solution of the equation
   *
   *     x^root = A
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *     math.nthRoot(a)
   *     math.nthRoot(a, root)
   *
   * Examples:
   *
   *     math.nthRoot(9, 2)    // returns 3 (since 3^2 == 9)
   *     math.sqrt(9)          // returns 3 (since 3^2 == 9)
   *     math.nthRoot(64, 3)   // returns 4 (since 4^3 == 64)
   *
   * See also:
   *
   *     sqrt, pow
   *
   * @param {number | BigNumber | Array | Matrix | Complex} a
   *              Value for which to calculate the nth root
   * @param {number | BigNumber} [root=2]    The root.
   * @return {number | Complex | Array | Matrix} Returns the nth root of `a`
   */
  function complexErr() {
    throw new Error('Complex number not supported in function nthRoot. Use nthRoots instead.');
  }
  return typed(name, {
    number: _index.nthRootNumber,
    'number, number': _index.nthRootNumber,
    BigNumber: x => _bigNthRoot(x, new BigNumber(2)),
    'BigNumber, BigNumber': _bigNthRoot,
    Complex: complexErr,
    'Complex, number': complexErr,
    Array: typed.referTo('DenseMatrix,number', selfDn => x => selfDn(matrix(x), 2).valueOf()),
    DenseMatrix: typed.referTo('DenseMatrix,number', selfDn => x => selfDn(x, 2)),
    SparseMatrix: typed.referTo('SparseMatrix,number', selfSn => x => selfSn(x, 2)),
    'SparseMatrix, SparseMatrix': typed.referToSelf(self => (x, y) => {
      // density must be one (no zeros in matrix)
      if (y.density() === 1) {
        // sparse + sparse
        return matAlgo06xS0S0(x, y, self);
      } else {
        // throw exception
        throw new Error('Root must be non-zero');
      }
    }),
    'DenseMatrix, SparseMatrix': typed.referToSelf(self => (x, y) => {
      // density must be one (no zeros in matrix)
      if (y.density() === 1) {
        // dense + sparse
        return matAlgo01xDSid(x, y, self, false);
      } else {
        // throw exception
        throw new Error('Root must be non-zero');
      }
    }),
    'Array, SparseMatrix': typed.referTo('DenseMatrix,SparseMatrix', selfDS => (x, y) => selfDS(matrix(x), y)),
    'number | BigNumber, SparseMatrix': typed.referToSelf(self => (x, y) => {
      // density must be one (no zeros in matrix)
      if (y.density() === 1) {
        // sparse - scalar
        return matAlgo11xS0s(y, x, self, true);
      } else {
        // throw exception
        throw new Error('Root must be non-zero');
      }
    })
  }, matrixAlgorithmSuite({
    scalar: 'number | BigNumber',
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: false
  }));

  /**
   * Calculate the nth root of a for BigNumbers, solve x^root == a
   * https://rosettacode.org/wiki/Nth_root#JavaScript
   * @param {BigNumber} a
   * @param {BigNumber} root
   * @private
   */
  function _bigNthRoot(a, root) {
    const precision = BigNumber.precision;
    const Big = BigNumber.clone({
      precision: precision + 2
    });
    const zero = new BigNumber(0);
    const one = new Big(1);
    const inv = root.isNegative();
    if (inv) {
      root = root.neg();
    }
    if (root.isZero()) {
      throw new Error('Root must be non-zero');
    }
    if (a.isNegative() && !root.abs().mod(2).equals(1)) {
      throw new Error('Root must be odd when a is negative.');
    }

    // edge cases zero and infinity
    if (a.isZero()) {
      return inv ? new Big(Infinity) : 0;
    }
    if (!a.isFinite()) {
      return inv ? zero : a;
    }
    let x = a.abs().pow(one.div(root));
    // If a < 0, we require that root is an odd integer,
    // so (-1) ^ (1/root) = -1
    x = a.isNeg() ? x.neg() : x;
    return new BigNumber((inv ? one.div(x) : x).toPrecision(precision));
  }
});
const createNthRootNumber = exports.createNthRootNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed'], _ref2 => {
  let {
    typed
  } = _ref2;
  return typed(name, {
    number: _index.nthRootNumber,
    'number, number': _index.nthRootNumber
  });
});