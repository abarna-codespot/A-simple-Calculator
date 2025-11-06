"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomNumber = exports.createRandom = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _seededRNG = require("./util/seededRNG.js");
var _randomMatrix2 = require("./util/randomMatrix.js");
const name = 'random';
const dependencies = ['typed', 'config', '?on'];
const createRandom = exports.createRandom = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    on
  } = _ref;
  // seeded pseudo random number generator
  let rng = (0, _seededRNG.createRng)(config.randomSeed);
  if (on) {
    on('config', function (curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = (0, _seededRNG.createRng)(curr.randomSeed);
      }
    });
  }

  /**
   * Return a random number larger or equal to `min` and smaller than `max`
   * using a uniform distribution.
   *
   * Syntax:
   *
   *     math.random()                // generate a random number between 0 and 1
   *     math.random(max)             // generate a random number between 0 and max
   *     math.random(min, max)        // generate a random number between min and max
   *     math.random(size)            // generate a matrix with random numbers between 0 and 1
   *     math.random(size, max)       // generate a matrix with random numbers between 0 and max
   *     math.random(size, min, max)  // generate a matrix with random numbers between min and max
   *
   * Examples:
   *
   *     math.random()       // returns a random number between 0 and 1
   *     math.random(100)    // returns a random number between 0 and 100
   *     math.random(30, 40) // returns a random number between 30 and 40
   *     math.random([2, 3]) // returns a 2x3 matrix with random numbers between 0 and 1
   *
   * See also:
   *
   *     randomInt, pickRandom
   *
   * @param {Array | Matrix} [size] If provided, an array or matrix with given
   *                                size and filled with random values is returned
   * @param {number} [min]  Minimum boundary for the random value, included
   * @param {number} [max]  Maximum boundary for the random value, excluded
   * @return {number | Array | Matrix} A random number
   */
  return typed(name, {
    '': () => _random(0, 1),
    number: max => _random(0, max),
    'number, number': (min, max) => _random(min, max),
    'Array | Matrix': size => _randomMatrix(size, 0, 1),
    'Array | Matrix, number': (size, max) => _randomMatrix(size, 0, max),
    'Array | Matrix, number, number': (size, min, max) => _randomMatrix(size, min, max)
  });
  function _randomMatrix(size, min, max) {
    const res = (0, _randomMatrix2.randomMatrix)(size.valueOf(), () => _random(min, max));
    return (0, _is.isMatrix)(size) ? size.create(res, 'number') : res;
  }
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});

// number only implementation of random, no matrix support
// TODO: there is quite some duplicate code in both createRandom and createRandomNumber, can we improve that?
const createRandomNumber = exports.createRandomNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config', '?on'], _ref2 => {
  let {
    typed,
    config,
    on,
    matrix
  } = _ref2;
  // seeded pseudo random number generator1
  let rng = (0, _seededRNG.createRng)(config.randomSeed);
  if (on) {
    on('config', function (curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = (0, _seededRNG.createRng)(curr.randomSeed);
      }
    });
  }
  return typed(name, {
    '': () => _random(0, 1),
    number: max => _random(0, max),
    'number, number': (min, max) => _random(min, max)
  });
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});