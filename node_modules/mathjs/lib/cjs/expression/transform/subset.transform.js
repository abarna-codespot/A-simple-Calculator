"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSubsetTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _subset = require("../../function/matrix/subset.js");
const name = 'subset';
const dependencies = ['typed', 'matrix', 'zeros', 'add'];
const createSubsetTransform = exports.createSubsetTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    zeros,
    add
  } = _ref;
  const subset = (0, _subset.createSubset)({
    typed,
    matrix,
    zeros,
    add
  });

  /**
   * Attach a transform function to math.subset
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed('subset', {
    '...any': function (args) {
      try {
        return subset.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});