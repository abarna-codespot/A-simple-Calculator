"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnOnce = void 0;
/**
 * Log a console.warn message only once
 */
const warnOnce = exports.warnOnce = (() => {
  const messages = {};
  return function warnOnce() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const message = args.join(', ');
    if (!messages[message]) {
      messages[message] = true;
      console.warn('Warning:', ...args);
    }
  };
})();