"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBigNumberTau = exports.createBigNumberPi = exports.createBigNumberPhi = exports.createBigNumberE = void 0;
var _function = require("../function.js");
/**
 * Calculate BigNumber e
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns e
 */
const createBigNumberE = exports.createBigNumberE = (0, _function.memoize)(function (BigNumber) {
  return new BigNumber(1).exp();
}, {
  hasher
});

/**
 * Calculate BigNumber golden ratio, phi = (1+sqrt(5))/2
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns phi
 */
const createBigNumberPhi = exports.createBigNumberPhi = (0, _function.memoize)(function (BigNumber) {
  return new BigNumber(1).plus(new BigNumber(5).sqrt()).div(2);
}, {
  hasher
});

/**
 * Calculate BigNumber pi.
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns pi
 */
const createBigNumberPi = exports.createBigNumberPi = (0, _function.memoize)(function (BigNumber) {
  return BigNumber.acos(-1);
}, {
  hasher
});

/**
 * Calculate BigNumber tau, tau = 2 * pi
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns tau
 */
const createBigNumberTau = exports.createBigNumberTau = (0, _function.memoize)(function (BigNumber) {
  return createBigNumberPi(BigNumber).times(2);
}, {
  hasher
});

/**
 * Create a hash for a BigNumber constructor function. The created has is
 * the configured precision
 * @param {Array} args         Supposed to contain a single entry with
 *                             a BigNumber constructor
 * @return {number} precision
 * @private
 */
function hasher(args) {
  return args[0].precision;
}