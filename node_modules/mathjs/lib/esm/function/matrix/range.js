import { factory } from '../../utils/factory.js';
import { noBignumber, noMatrix } from '../../utils/noop.js';
var name = 'range';
var dependencies = ['typed', 'config', '?matrix', '?bignumber', 'equal', 'smaller', 'smallerEq', 'larger', 'largerEq', 'add', 'isZero', 'isPositive'];
export var createRange = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq,
    add,
    isZero,
    isPositive
  } = _ref;
  /**
   * Create a matrix or array containing a range of values.
   * By default, the range end is excluded. This can be customized by providing
   * an extra parameter `includeEnd`.
   *
   * Syntax:
   *
   *     math.range(str [, includeEnd])               // Create a range from a string,
   *                                                  // where the string contains the
   *                                                  // start, optional step, and end,
   *                                                  // separated by a colon.
   *     math.range(start, end [, includeEnd])        // Create a range with start and
   *                                                  // end and a step size of 1.
   *     math.range(start, end, step [, includeEnd])  // Create a range with start, step,
   *                                                  // and end.
   *
   * Where:
   *
   * - `str: string`
   *   A string 'start:end' or 'start:step:end'
   * - `start: {number | bigint | BigNumber | Fraction | Unit}`
   *   Start of the range
   * - `end: number | bigint | BigNumber | Fraction | Unit`
   *   End of the range, excluded by default, included when parameter includeEnd=true
   * - `step: number | bigint | BigNumber | Fraction | Unit`
   *   Step size. Default value is 1.
   * - `includeEnd: boolean`
   *   Option to specify whether to include the end or not. False by default.
   *
   * The function returns a `DenseMatrix` when the library is configured with
   * `config = { matrix: 'Matrix' }, and returns an Array otherwise.
   * Note that the type of the returned values is taken from the type of the
   * provided start/end value. If only one of these is a built-in `number` type,
   * it will be promoted to the type of the other endpoint. However, in the case
   * of Unit values, both endpoints must have compatible units, and the return
   * value will have compatible units as well.
   *
   * Examples:
   *
   *     math.range(2, 6)        // [2, 3, 4, 5]
   *     math.range(2, -3, -1)   // [2, 1, 0, -1, -2]
   *     math.range('2:1:6')     // [2, 3, 4, 5]
   *     math.range(2, 6, true)  // [2, 3, 4, 5, 6]
   *     math.range(2, math.fraction(8,3), math.fraction(1,3)) // [fraction(2), fraction(7,3)]
   *     math.range(math.unit(2, 'm'), math.unit(-3, 'm'), math.unit(-1, 'm')) // [2 m, 1 m, 0 m , -1 m, -2 m]
   *
   * See also:
   *
   *     ones, zeros, size, subset
   *
   * @param {*} args   Parameters describing the range's `start`, `end`, and optional `step`.
   * @return {Array | Matrix} range
   */
  return typed(name, {
    // TODO: simplify signatures when typed-function supports default values and optional arguments

    string: _strRange,
    'string, boolean': _strRange,
    number: function number(oops) {
      throw new TypeError("Too few arguments to function range(): ".concat(oops));
    },
    boolean: function boolean(oops) {
      throw new TypeError("Unexpected type of argument 1 to function range(): ".concat(oops, ", number|bigint|BigNumber|Fraction"));
    },
    'number, number': function number_number(start, end) {
      return _out(_range(start, end, 1, false));
    },
    'number, number, number': function number_number_number(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'number, number, boolean': function number_number_boolean(start, end, includeEnd) {
      return _out(_range(start, end, 1, includeEnd));
    },
    'number, number, number, boolean': function number_number_number_boolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    },
    // Handle bigints; if either limit is bigint, range should be too
    'bigint, bigint|number': function bigint_bigintNumber(start, end) {
      return _out(_range(start, end, 1n, false));
    },
    'number, bigint': function number_bigint(start, end) {
      return _out(_range(BigInt(start), end, 1n, false));
    },
    'bigint, bigint|number, bigint|number': function bigint_bigintNumber_bigintNumber(start, end, step) {
      return _out(_range(start, end, BigInt(step), false));
    },
    'number, bigint, bigint|number': function number_bigint_bigintNumber(start, end, step) {
      return _out(_range(BigInt(start), end, BigInt(step), false));
    },
    'bigint, bigint|number, boolean': function bigint_bigintNumber_boolean(start, end, includeEnd) {
      return _out(_range(start, end, 1n, includeEnd));
    },
    'number, bigint, boolean': function number_bigint_boolean(start, end, includeEnd) {
      return _out(_range(BigInt(start), end, 1n, includeEnd));
    },
    'bigint, bigint|number, bigint|number, boolean': function bigint_bigintNumber_bigintNumber_boolean(start, end, step, includeEnd) {
      return _out(_range(start, end, BigInt(step), includeEnd));
    },
    'number, bigint, bigint|number, boolean': function number_bigint_bigintNumber_boolean(start, end, step, includeEnd) {
      return _out(_range(BigInt(start), end, BigInt(step), includeEnd));
    },
    'BigNumber, BigNumber': function BigNumber_BigNumber(start, end) {
      var BigNumber = start.constructor;
      return _out(_range(start, end, new BigNumber(1), false));
    },
    'BigNumber, BigNumber, BigNumber': function BigNumber_BigNumber_BigNumber(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'BigNumber, BigNumber, boolean': function BigNumber_BigNumber_boolean(start, end, includeEnd) {
      var BigNumber = start.constructor;
      return _out(_range(start, end, new BigNumber(1), includeEnd));
    },
    'BigNumber, BigNumber, BigNumber, boolean': function BigNumber_BigNumber_BigNumber_boolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    },
    'Fraction, Fraction': function Fraction_Fraction(start, end) {
      return _out(_range(start, end, 1, false));
    },
    'Fraction, Fraction, Fraction': function Fraction_Fraction_Fraction(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'Fraction, Fraction, boolean': function Fraction_Fraction_boolean(start, end, includeEnd) {
      return _out(_range(start, end, 1, includeEnd));
    },
    'Fraction, Fraction, Fraction, boolean': function Fraction_Fraction_Fraction_boolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    },
    'Unit, Unit, Unit': function Unit_Unit_Unit(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'Unit, Unit, Unit, boolean': function Unit_Unit_Unit_boolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    }
  });
  function _out(arr) {
    if (config.matrix === 'Matrix') {
      return matrix ? matrix(arr) : noMatrix();
    }
    return arr;
  }
  function _strRange(str, includeEnd) {
    var r = _parse(str);
    if (!r) {
      throw new SyntaxError('String "' + str + '" is no valid range');
    }
    if (config.number === 'BigNumber') {
      if (bignumber === undefined) {
        noBignumber();
      }
      return _out(_range(bignumber(r.start), bignumber(r.end), bignumber(r.step)), includeEnd);
    } else {
      return _out(_range(r.start, r.end, r.step, includeEnd));
    }
  }

  /**
   * Create a range with numbers or BigNumbers
   * @param {number | BigNumber | Unit} start
   * @param {number | BigNumber | Unit} end
   * @param {number | BigNumber | Unit} step
   * @param {boolean} includeEnd
   * @returns {Array} range
   * @private
   */
  function _range(start, end, step, includeEnd) {
    var array = [];
    if (isZero(step)) throw new Error('Step must be non-zero');
    var ongoing = isPositive(step) ? includeEnd ? smallerEq : smaller : includeEnd ? largerEq : larger;
    var x = start;
    while (ongoing(x, end)) {
      array.push(x);
      x = add(x, step);
    }
    return array;
  }

  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @param {string} str
   * @return {{start: number, end: number, step: number} | null} range Object containing properties start, end, step
   * @private
   */
  function _parse(str) {
    var args = str.split(':');

    // number
    var nums = args.map(function (arg) {
      // use Number and not parseFloat as Number returns NaN on invalid garbage in the string
      return Number(arg);
    });
    var invalid = nums.some(function (num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }
    switch (nums.length) {
      case 2:
        return {
          start: nums[0],
          end: nums[1],
          step: 1
        };
      case 3:
        return {
          start: nums[0],
          end: nums[2],
          step: nums[1]
        };
      default:
        return null;
    }
  }
});