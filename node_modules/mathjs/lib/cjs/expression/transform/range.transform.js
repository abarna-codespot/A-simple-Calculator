"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRangeTransform = void 0;
var _factory = require("../../utils/factory.js");
var _range = require("../../function/matrix/range.js");
const name = 'range';
const dependencies = ['typed', 'config', '?matrix', '?bignumber', 'equal', 'smaller', 'smallerEq', 'larger', 'largerEq', 'add', 'isZero', 'isPositive'];
const createRangeTransform = exports.createRangeTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    matrix,
    bignumber,
    equal,
    smaller,
    smallerEq,
    larger,
    largerEq,
    add,
    isZero,
    isPositive
  } = _ref;
  const range = (0, _range.createRange)({
    typed,
    config,
    matrix,
    bignumber,
    equal,
    smaller,
    smallerEq,
    larger,
    largerEq,
    add,
    isZero,
    isPositive
  });

  /**
   * Attach a transform function to math.range
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed('range', {
    '...any': function (args) {
      const lastIndex = args.length - 1;
      const last = args[lastIndex];
      if (typeof last !== 'boolean') {
        // append a parameter includeEnd=true
        args.push(true);
      }
      return range.apply(null, args);
    }
  });
}, {
  isTransformFunction: true
});