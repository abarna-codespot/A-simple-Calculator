"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitAndTransform = void 0;
var _bitAnd = require("../../function/bitwise/bitAnd.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'bitAnd';
const dependencies = ['typed', 'matrix', 'zeros', 'add', 'equalScalar', 'not', 'concat'];
const createBitAndTransform = exports.createBitAndTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    zeros,
    not,
    concat
  } = _ref;
  const bitAnd = (0, _bitAnd.createBitAnd)({
    typed,
    matrix,
    equalScalar,
    zeros,
    not,
    concat
  });
  function bitAndTransform(args, math, scope) {
    const condition1 = args[0].compile().evaluate(scope);
    if (!(0, _is.isCollection)(condition1)) {
      if (isNaN(condition1)) {
        return NaN;
      }
      if (condition1 === 0 || condition1 === false) {
        return 0;
      }
    }
    const condition2 = args[1].compile().evaluate(scope);
    return bitAnd(condition1, condition2);
  }
  bitAndTransform.rawArgs = true;
  return bitAndTransform;
}, {
  isTransformFunction: true
});