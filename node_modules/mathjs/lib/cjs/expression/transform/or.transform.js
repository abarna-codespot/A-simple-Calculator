"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrTransform = void 0;
var _or = require("../../function/logical/or.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'or';
const dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
const createOrTransform = exports.createOrTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  const or = (0, _or.createOr)({
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  });
  function orTransform(args, math, scope) {
    const condition1 = args[0].compile().evaluate(scope);
    if (!(0, _is.isCollection)(condition1) && or(condition1, false)) {
      return true;
    }
    const condition2 = args[1].compile().evaluate(scope);
    return or(condition1, condition2);
  }
  orTransform.rawArgs = true;
  return orTransform;
}, {
  isTransformFunction: true
});