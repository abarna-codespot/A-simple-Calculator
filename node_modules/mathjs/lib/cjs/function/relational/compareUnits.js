"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompareUnits = void 0;
var _factory = require("../../utils/factory.js");
const createCompareUnits = exports.createCompareUnits = /* #__PURE__ */(0, _factory.factory)('compareUnits', ['typed'], _ref => {
  let {
    typed
  } = _ref;
  return {
    'Unit, Unit': typed.referToSelf(self => (x, y) => {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }
      return typed.find(self, [x.valueType(), y.valueType()])(x.value, y.value);
    })
  };
});