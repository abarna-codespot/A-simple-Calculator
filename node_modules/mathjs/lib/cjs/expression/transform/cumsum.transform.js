"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCumSumTransform = void 0;
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _cumsum = require("../../function/statistics/cumsum.js");
/**
 * Attach a transform function to math.sum
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function sum
 * from one-based to zero based
 */
const name = 'cumsum';
const dependencies = ['typed', 'add', 'unaryPlus'];
const createCumSumTransform = exports.createCumSumTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    add,
    unaryPlus
  } = _ref;
  const cumsum = (0, _cumsum.createCumSum)({
    typed,
    add,
    unaryPlus
  });
  return typed(name, {
    '...any': function (args) {
      // change last argument dim from one-based to zero-based
      if (args.length === 2 && (0, _is.isCollection)(args[0])) {
        const dim = args[1];
        if ((0, _is.isNumber)(dim)) {
          args[1] = dim - 1;
        } else if ((0, _is.isBigNumber)(dim)) {
          args[1] = dim.minus(1);
        }
      }
      try {
        return cumsum.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});