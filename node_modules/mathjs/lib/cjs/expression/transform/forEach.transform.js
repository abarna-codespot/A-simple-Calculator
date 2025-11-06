"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForEachTransform = void 0;
var _forEach = require("../../function/matrix/forEach.js");
var _transformCallback = require("./utils/transformCallback.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
const name = 'forEach';
const dependencies = ['typed'];
const createForEachTransform = exports.createForEachTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Attach a transform function to math.forEach
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  const forEach = (0, _forEach.createForEach)({
    typed
  });
  const transformCallback = (0, _transformCallback.createTransformCallback)({
    typed
  });
  function forEachTransform(args, math, scope) {
    if (args.length === 0) {
      return forEach();
    }
    let x = args[0];
    if (args.length === 1) {
      return forEach(x);
    }
    const N = args.length - 1;
    let callback = args[N];
    if (x) {
      x = _compileAndEvaluate(x, scope);
    }
    if (callback) {
      if ((0, _is.isSymbolNode)(callback) || (0, _is.isFunctionAssignmentNode)(callback)) {
        // a function pointer, like filter([3, -2, 5], myTestFunction)
        callback = _compileAndEvaluate(callback, scope);
      } else {
        // an expression like filter([3, -2, 5], x > 0)
        callback = (0, _compileInlineExpression.compileInlineExpression)(callback, math, scope);
      }
    }
    return forEach(x, transformCallback(callback, N));
  }
  forEachTransform.rawArgs = true;
  function _compileAndEvaluate(arg, scope) {
    return arg.compile().evaluate(scope);
  }
  return forEachTransform;
}, {
  isTransformFunction: true
});