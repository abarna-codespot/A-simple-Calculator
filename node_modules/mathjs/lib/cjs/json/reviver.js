"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReviver = void 0;
var _factory = require("../utils/factory.js");
const name = 'reviver';
const dependencies = ['classes'];
const createReviver = exports.createReviver = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    classes
  } = _ref;
  /**
   * Instantiate mathjs data types from their JSON representation
   * @param {string} key
   * @param {*} value
   * @returns {*} Returns the revived object
   */
  return function reviver(key, value) {
    const constructor = classes[value && value.mathjs];
    if (constructor && typeof constructor.fromJSON === 'function') {
      return constructor.fromJSON(value);
    }
    return value;
  };
});