"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimToZeroBase = dimToZeroBase;
exports.isNumberOrBigNumber = isNumberOrBigNumber;
var _is = require("../../../utils/is.js");
/**
 * Change last argument dim from one-based to zero-based.
 */
function dimToZeroBase(dim) {
  if ((0, _is.isNumber)(dim)) {
    return dim - 1;
  } else if ((0, _is.isBigNumber)(dim)) {
    return dim.minus(1);
  } else {
    return dim;
  }
}
function isNumberOrBigNumber(n) {
  return (0, _is.isNumber)(n) || (0, _is.isBigNumber)(n);
}