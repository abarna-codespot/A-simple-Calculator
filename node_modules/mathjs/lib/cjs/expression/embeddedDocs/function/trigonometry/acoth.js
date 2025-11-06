"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acothDocs = void 0;
const acothDocs = exports.acothDocs = {
  name: 'acoth',
  category: 'Trigonometry',
  syntax: ['acoth(x)'],
  description: 'Calculate the inverse hyperbolic tangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.',
  examples: ['acoth(2)', 'acoth(0.5)'],
  seealso: ['acsch', 'asech']
};