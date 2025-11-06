"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFiniteDocs = void 0;
const isFiniteDocs = exports.isFiniteDocs = {
  name: 'isFinite',
  category: 'Utils',
  syntax: ['isFinite(x)'],
  description: 'Test whether a value is finite, elementwise on collections.',
  examples: ['isFinite(Infinity)', 'isFinite(bigint(3))', 'isFinite([3, -Infinity, -3])'],
  seealso: ['isBounded', 'isNumeric', 'isNaN', 'isNegative', 'isPositive']
};