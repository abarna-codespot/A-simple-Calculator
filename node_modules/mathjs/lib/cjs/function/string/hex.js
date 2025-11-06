"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHex = void 0;
var _factory = require("../../utils/factory.js");
const name = 'hex';
const dependencies = ['typed', 'format'];

/**
 * Format a number as hexadecimal.
 *
 * Syntax:
 *
 *    math.hex(value)
 *
 * Examples:
 *
 *    math.hex(240) // returns "0xf0"
 *
 * See also:
 *
 *    oct
 *    bin
 *
 * @param {number | BigNumber} value    Value to be stringified
 * @param {number | BigNumber} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */
const createHex = exports.createHex = (0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function (n) {
      return format(n, {
        notation: 'hex'
      });
    },
    'number | BigNumber, number | BigNumber': function (n, wordSize) {
      return format(n, {
        notation: 'hex',
        wordSize
      });
    }
  });
});