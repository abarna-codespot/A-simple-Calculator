"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIndexTransform = void 0;
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
const name = 'index';
const dependencies = ['Index', 'getMatrixDataType'];
const createIndexTransform = exports.createIndexTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    Index,
    getMatrixDataType
  } = _ref;
  /**
   * Attach a transform function to math.index
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  return function indexTransform() {
    const args = [];
    for (let i = 0, ii = arguments.length; i < ii; i++) {
      let arg = arguments[i];

      // change from one-based to zero based, convert BigNumber to number and leave Array of Booleans as is
      if ((0, _is.isRange)(arg)) {
        arg.start--;
        arg.end -= arg.step > 0 ? 0 : 2;
      } else if (arg && arg.isSet === true) {
        arg = arg.map(function (v) {
          return v - 1;
        });
      } else if ((0, _is.isArray)(arg) || (0, _is.isMatrix)(arg)) {
        if (getMatrixDataType(arg) !== 'boolean') {
          arg = arg.map(function (v) {
            return v - 1;
          });
        }
      } else if ((0, _is.isNumber)(arg) || (0, _is.isBigInt)(arg)) {
        arg--;
      } else if ((0, _is.isBigNumber)(arg)) {
        arg = arg.toNumber() - 1;
      } else if (typeof arg === 'string') {
        // leave as is
      } else {
        throw new TypeError('Dimension must be an Array, Matrix, number, bigint, string, or Range');
      }
      args[i] = arg;
    }
    const res = new Index();
    Index.apply(res, args);
    return res;
  };
}, {
  isTransformFunction: true
});