"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDiffTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _diff = require("../../function/matrix/diff.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'diff';
const dependencies = ['typed', 'matrix', 'subtract', 'number', 'bignumber'];
const createDiffTransform = exports.createDiffTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    subtract,
    number,
    bignumber
  } = _ref;
  const diff = (0, _diff.createDiff)({
    typed,
    matrix,
    subtract,
    number,
    bignumber
  });

  /**
   * Attach a transform function to math.diff
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed(name, {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return diff.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});