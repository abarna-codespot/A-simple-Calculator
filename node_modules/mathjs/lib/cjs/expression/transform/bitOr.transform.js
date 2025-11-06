"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitOrTransform = void 0;
var _bitOr = require("../../function/bitwise/bitOr.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'bitOr';
const dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
const createBitOrTransform = exports.createBitOrTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  const bitOr = (0, _bitOr.createBitOr)({
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  });
  function bitOrTransform(args, math, scope) {
    const condition1 = args[0].compile().evaluate(scope);
    if (!(0, _is.isCollection)(condition1)) {
      if (isNaN(condition1)) {
        return NaN;
      }
      if (condition1 === -1) {
        return -1;
      }
      if (condition1 === true) {
        return 1;
      }
    }
    const condition2 = args[1].compile().evaluate(scope);
    return bitOr(condition1, condition2);
  }
  bitOrTransform.rawArgs = true;
  return bitOrTransform;
}, {
  isTransformFunction: true
});