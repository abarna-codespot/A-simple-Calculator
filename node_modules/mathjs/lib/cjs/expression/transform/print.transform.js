"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPrintTransform = void 0;
var _print = require("../../function/string/print.js");
var _factory = require("../../utils/factory.js");
var _print2 = require("../../utils/print.js");
const name = 'print';
const dependencies = ['typed', 'matrix', 'zeros', 'add'];
const createPrintTransform = exports.createPrintTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    zeros,
    add
  } = _ref;
  const print = (0, _print.createPrint)({
    typed,
    matrix,
    zeros,
    add
  });
  return typed(name, {
    'string, Object | Array': function (template, values) {
      return print(_convertTemplateToZeroBasedIndex(template), values);
    },
    'string, Object | Array, number | Object': function (template, values, options) {
      return print(_convertTemplateToZeroBasedIndex(template), values, options);
    }
  });
  function _convertTemplateToZeroBasedIndex(template) {
    return template.replace(_print2.printTemplate, x => {
      const parts = x.slice(1).split('.');
      const result = parts.map(function (part) {
        if (!isNaN(part) && part.length > 0) {
          return parseInt(part) - 1;
        } else {
          return part;
        }
      });
      return '$' + result.join('.');
    });
  }
}, {
  isTransformFunction: true
});