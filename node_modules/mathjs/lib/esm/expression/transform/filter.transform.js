import { createFilter } from '../../function/matrix/filter.js';
import { factory } from '../../utils/factory.js';
import { isFunctionAssignmentNode, isSymbolNode } from '../../utils/is.js';
import { compileInlineExpression } from './utils/compileInlineExpression.js';
import { createTransformCallback } from './utils/transformCallback.js';
var name = 'filter';
var dependencies = ['typed'];
export var createFilterTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
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
    var filter = createFilter({
      typed
    });
    var transformCallback = createTransformCallback({
      typed
    });
    if (args.length === 0) {
      return filter();
    }
    var x = args[0];
    if (args.length === 1) {
      return filter(x);
    }
    var N = args.length - 1;
    var callback = args[N];
    if (x) {
      x = _compileAndEvaluate(x, scope);
    }
    if (callback) {
      if (isSymbolNode(callback) || isFunctionAssignmentNode(callback)) {
        // a function pointer, like filter([3, -2, 5], myTestFunction)
        callback = _compileAndEvaluate(callback, scope);
      } else {
        // an expression like filter([3, -2, 5], x > 0)
        callback = compileInlineExpression(callback, math, scope);
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