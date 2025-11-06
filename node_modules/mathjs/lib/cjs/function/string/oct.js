"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOct = void 0;
var _factory = require("../../utils/factory.js");
const name = 'oct';
const dependencies = ['typed', 'format'];

/**
 * Format a number as octal.
 *
 * Syntax:
 *
 *    math.oct(value)
 *
 * Examples:
 *
 *    //the following outputs "0o70"
 *    math.oct(56)
 *
 * See also:
 *
 *    bin
 *    hex
 *
 * @param {number | BigNumber} value    Value to be stringified
 * @param {number | BigNumber} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */

const createOct = exports.createOct = (0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function (n) {
      return format(n, {
        notation: 'oct'
      });
    },
    'number | BigNumber, number | BigNumber': function (n, wordSize) {
      return format(n, {
        notation: 'oct',
        wordSize
      });
    }
  });
});