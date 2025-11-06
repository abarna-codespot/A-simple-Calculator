"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIfft = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'ifft';
const dependencies = ['typed', 'fft', 'dotDivide', 'conj'];
const createIfft = exports.createIfft = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    fft,
    dotDivide,
    conj
  } = _ref;
  /**
   * Calculate N-dimensional inverse Fourier transform
   *
   * Syntax:
   *
   *     math.ifft(arr)
   *
   * Examples:
   *
   *    math.ifft([[2, 2], [0, 0]]) // returns [[{re:1, im:0}, {re:0, im:0}], [{re:1, im:0}, {re:0, im:0}]]
   *
   * See Also:
   *
   *      fft
   *
   * @param {Array | Matrix} arr    An array or matrix
   * @return {Array | Matrix}       N-dimensional Fourier transformation of the array
   */
  return typed(name, {
    'Array | Matrix': function (arr) {
      const size = (0, _is.isMatrix)(arr) ? arr.size() : (0, _array.arraySize)(arr);
      return dotDivide(conj(fft(conj(arr))), size.reduce((acc, curr) => acc * curr, 1));
    }
  });
});