"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSlicesDocs = void 0;
const mapSlicesDocs = exports.mapSlicesDocs = {
  name: 'mapSlices',
  category: 'Matrix',
  syntax: ['mapSlices(A, dim, callback)'],
  description: 'Generate a matrix one dimension less than A by applying callback to ' + 'each slice of A along dimension dim.',
  examples: ['A = [[1, 2], [3, 4]]', 'mapSlices(A, 1, sum)',
  // returns [4, 6]
  'mapSlices(A, 2, prod)' // returns [2, 12]
  ],
  seealso: ['map', 'forEach']
};