import { factory } from '../utils/factory.js';
import { deepMap } from '../utils/collection.js';
var name = 'bigint';
var dependencies = ['typed'];
export var createBigint = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Create a bigint or convert a string, boolean, or unit to a bigint.
   * When value is a matrix, all elements will be converted to bigint.
   *
   * Syntax:
   *
   *    math.bigint(value)
   *
   * Examples:
   *
   *    math.bigint(2)                         // returns 2n
   *    math.bigint('123')                     // returns 123n
   *    math.bigint(true)                      // returns 1n
   *    math.bigint([true, false, true, true]) // returns [1n, 0n, 1n, 1n]
   *
   * See also:
   *
   *    number, bignumber, boolean, complex, index, matrix, string, unit
   *
   * @param {string | number | BigNumber | bigint | Fraction | boolean | Array | Matrix | null} [value]  Value to be converted
   * @return {bigint | Array | Matrix} The created bigint
   */
  var bigint = typed('bigint', {
    '': function _() {
      return 0n;
    },
    bigint: function bigint(x) {
      return x;
    },
    number: function number(x) {
      return BigInt(x.toFixed());
    },
    BigNumber: function BigNumber(x) {
      return BigInt(x.round().toString());
    },
    Fraction: function Fraction(x) {
      return BigInt(x.valueOf().toFixed());
    },
    'string | boolean': function string__boolean(x) {
      return BigInt(x);
    },
    null: function _null(x) {
      return 0n;
    },
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self))
  });

  // reviver function to parse a JSON object like:
  //
  //     {"mathjs":"bigint","value":"123"}
  //
  // into a bigint 123n
  bigint.fromJSON = function (json) {
    return BigInt(json.value);
  };
  return bigint;
});