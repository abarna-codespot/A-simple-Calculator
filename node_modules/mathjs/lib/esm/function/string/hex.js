import { factory } from '../../utils/factory.js';
var name = 'hex';
var dependencies = ['typed', 'format'];

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
export var createHex = factory(name, dependencies, _ref => {
  var {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function number__BigNumber(n) {
      return format(n, {
        notation: 'hex'
      });
    },
    'number | BigNumber, number | BigNumber': function number__BigNumber_number__BigNumber(n, wordSize) {
      return format(n, {
        notation: 'hex',
        wordSize
      });
    }
  });
});