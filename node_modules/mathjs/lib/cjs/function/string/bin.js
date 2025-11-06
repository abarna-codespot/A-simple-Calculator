"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBin = void 0;
var _factory = require("../../utils/factory.js");
const name = 'bin';
const dependencies = ['typed', 'format'];

/**
 * Format a number as binary.
 *
 * Syntax:
 *
 *    math.bin(value)
 *
 * Examples:
 *
 *    //the following outputs "0b10"
 *    math.bin(2)
 *
 * See also:
 *
 *    oct
 *    hex
 *
 * @param {number | BigNumber} value    Value to be stringified
 * @param {number | BigNumber} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */
const createBin = exports.createBin = (0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function (n) {
      return format(n, {
        notation: 'bin'
      });
    },
    'number | BigNumber, number | BigNumber': function (n, wordSize) {
      return format(n, {
        notation: 'bin',
        wordSize
      });
    }
  });
});