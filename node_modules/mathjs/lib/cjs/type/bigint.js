"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBigint = void 0;
var _factory = require("../utils/factory.js");
var _collection = require("../utils/collection.js");
const name = 'bigint';
const dependencies = ['typed'];
const createBigint = exports.createBigint = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
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
  const bigint = typed('bigint', {
    '': function () {
      return 0n;
    },
    bigint: function (x) {
      return x;
    },
    number: function (x) {
      return BigInt(x.toFixed());
    },
    BigNumber: function (x) {
      return BigInt(x.round().toString());
    },
    Fraction: function (x) {
      return BigInt(x.valueOf().toFixed());
    },
    'string | boolean': function (x) {
      return BigInt(x);
    },
    null: function (x) {
      return 0n;
    },
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
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