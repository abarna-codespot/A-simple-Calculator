"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNullishTransform = void 0;
var _nullish = require("../../function/logical/nullish.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
const name = 'nullish';
const dependencies = ['typed', 'matrix', 'size', 'flatten', 'deepEqual'];
const createNullishTransform = exports.createNullishTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    size,
    flatten,
    deepEqual
  } = _ref;
  const nullish = (0, _nullish.createNullish)({
    typed,
    matrix,
    size,
    flatten,
    deepEqual
  });
  function nullishTransform(args, math, scope) {
    const left = args[0].compile().evaluate(scope);

    // If left is not a collection and not nullish, short-circuit and return it
    if (!(0, _is.isCollection)(left) && left != null && left !== undefined) {
      return left;
    }

    // Otherwise evaluate right and apply full nullish semantics (incl. element-wise)
    const right = args[1].compile().evaluate(scope);
    return nullish(left, right);
  }
  nullishTransform.rawArgs = true;
  return nullishTransform;
}, {
  isTransformFunction: true
});