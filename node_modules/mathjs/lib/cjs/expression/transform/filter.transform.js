"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterTransform = void 0;
var _filter = require("../../function/matrix/filter.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
var _transformCallback = require("./utils/transformCallback.js");
const name = 'filter';
const dependencies = ['typed'];
const createFilterTransform = exports.createFilterTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Attach a transform function to math.filter
   * Adds a property transform containing the transform function.
   *
   * This transform adds support for equations as test function for math.filter,
   * so you can do something like 'filter([3, -2, 5], x > 0)'.
   */
  function filterTransform(args, math, scope) {
    const filter = (0, _filter.createFilter)({
      typed
    });
    const transformCallback = (0, _transformCallback.createTransformCallback)({
      typed
    });
    if (args.length === 0) {
      return filter();
    }
    let x = args[0];
    if (args.length === 1) {
      return filter(x);
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
    return filter(x, transformCallback(callback, N));
  }
  filterTransform.rawArgs = true;
  function _compileAndEvaluate(arg, scope) {
    return arg.compile().evaluate(scope);
  }
  return filterTransform;
}, {
  isTransformFunction: true
});