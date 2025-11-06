"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAndTransform = void 0;
var _and = require("../../function/logical/and.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'and';
const dependencies = ['typed', 'matrix', 'zeros', 'add', 'equalScalar', 'not', 'concat'];
const createAndTransform = exports.createAndTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    zeros,
    not,
    concat
  } = _ref;
  const and = (0, _and.createAnd)({
    typed,
    matrix,
    equalScalar,
    zeros,
    not,
    concat
  });
  function andTransform(args, math, scope) {
    const condition1 = args[0].compile().evaluate(scope);
    if (!(0, _is.isCollection)(condition1) && !and(condition1, true)) {
      return false;
    }
    const condition2 = args[1].compile().evaluate(scope);
    return and(condition1, condition2);
  }
  andTransform.rawArgs = true;
  return andTransform;
}, {
  isTransformFunction: true
});