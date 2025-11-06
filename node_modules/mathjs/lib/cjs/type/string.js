"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createString = void 0;
var _factory = require("../utils/factory.js");
var _collection = require("../utils/collection.js");
var _number = require("../utils/number.js");
const name = 'string';
const dependencies = ['typed'];
const createString = exports.createString = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Create a string or convert any object into a string.
   * Elements of Arrays and Matrices are processed element wise.
   *
   * Syntax:
   *
   *    math.string(value)
   *
   * Examples:
   *
   *    math.string(4.2)                // returns string '4.2'
   *    math.string(math.complex(3, 2)) // returns string '3 + 2i'
   *
   *    const u = math.unit(5, 'km')
   *    math.string(u.to('m'))          // returns string '5000 m'
   *
   *    math.string([true, false])      // returns ['true', 'false']
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, matrix, number, unit
   *
   * @param {* | Array | Matrix | null} [value]  A value to convert to a string
   * @return {string | Array | Matrix} The created string
   */
  return typed(name, {
    '': function () {
      return '';
    },
    number: _number.format,
    null: function (x) {
      return 'null';
    },
    boolean: function (x) {
      return x + '';
    },
    string: function (x) {
      return x;
    },
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self)),
    any: function (x) {
      return String(x);
    }
  });
});