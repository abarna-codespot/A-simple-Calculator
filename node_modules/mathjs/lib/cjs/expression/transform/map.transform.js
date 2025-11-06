"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMapTransform = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _map = require("../../function/matrix/map.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
var _transformCallback = require("./utils/transformCallback.js");
const name = 'map';
const dependencies = ['typed'];
const createMapTransform = exports.createMapTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Attach a transform function to math.map
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  const map = (0, _map.createMap)({
    typed
  });
  const transformCallback = (0, _transformCallback.createTransformCallback)({
    typed
  });
  function mapTransform(args, math, scope) {
    if (args.length === 0) {
      return map();
    }
    if (args.length === 1) {
      return map(args[0]);
    }
    const N = args.length - 1;
    let X = args.slice(0, N);
    let callback = args[N];
    X = X.map(arg => _compileAndEvaluate(arg, scope));
    if (callback) {
      if ((0, _is.isSymbolNode)(callback) || (0, _is.isFunctionAssignmentNode)(callback)) {
        // a function pointer, like filter([3, -2, 5], myTestFunction)
        callback = _compileAndEvaluate(callback, scope);
      } else {
        // an expression like filter([3, -2, 5], x > 0)
        callback = (0, _compileInlineExpression.compileInlineExpression)(callback, math, scope);
      }
    }
    return map(...X, transformCallback(callback, N));
    function _compileAndEvaluate(arg, scope) {
      return arg.compile().evaluate(scope);
    }
  }
  mapTransform.rawArgs = true;
  return mapTransform;
}, {
  isTransformFunction: true
});