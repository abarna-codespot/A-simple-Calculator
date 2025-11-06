"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcast = broadcast;
var _array = require("../../../utils/array.js");
var _object = require("../../../utils/object.js");
/**
* Broadcasts two matrices, and return both in an array
* It checks if it's possible with broadcasting rules
*
* @param {Matrix}   A      First Matrix
* @param {Matrix}   B      Second Matrix
*
* @return {Matrix[]}      [ broadcastedA, broadcastedB ]
*/

function broadcast(A, B) {
  if ((0, _object.deepStrictEqual)(A.size(), B.size())) {
    // If matrices have the same size return them
    return [A, B];
  }

  // calculate the broadcasted sizes
  const newSize = (0, _array.broadcastSizes)(A.size(), B.size());

  // return the array with the two broadcasted matrices
  return [A, B].map(M => _broadcastTo(M, newSize));
}

/**
 * Broadcasts a matrix to the given size.
 *
 * @param {Matrix} M - The matrix to be broadcasted.
 * @param {number[]} size - The desired size of the broadcasted matrix.
 * @returns {Matrix} The broadcasted matrix.
 * @throws {Error} If the size parameter is not an array of numbers.
 */
function _broadcastTo(M, size) {
  if ((0, _object.deepStrictEqual)(M.size(), size)) {
    return M;
  }
  return M.create((0, _array.broadcastTo)(M.valueOf(), size), M.datatype());
}