"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTrigUnit = void 0;
var _factory = require("../../utils/factory.js");
const createTrigUnit = exports.createTrigUnit = /* #__PURE__ */(0, _factory.factory)('trigUnit', ['typed'], _ref => {
  let {
    typed
  } = _ref;
  return {
    Unit: typed.referToSelf(self => x => {
      if (!x.hasBase(x.constructor.BASE_UNITS.ANGLE)) {
        throw new TypeError('Unit in function cot is no angle');
      }
      return typed.find(self, x.valueType())(x.value);
    })
  };
});