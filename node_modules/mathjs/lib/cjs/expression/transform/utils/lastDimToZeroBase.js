"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastDimToZeroBase = lastDimToZeroBase;
var _is = require("../../../utils/is.js");
var _dimToZeroBase = require("./dimToZeroBase.js");
/**
 * Change last argument dim from one-based to zero-based.
 */
function lastDimToZeroBase(args) {
  if (args.length === 2 && (0, _is.isCollection)(args[0])) {
    args = args.slice();
    const dim = args[1];
    if ((0, _dimToZeroBase.isNumberOrBigNumber)(dim)) {
      args[1] = (0, _dimToZeroBase.dimToZeroBase)(dim);
    }
  }
  return args;
}