'use strict';

const chai = require('chai');
const Game = require('../Game');

const assert = chai.assert;

let match;
describe('BowlingGame', function() {
  this.beforeEach(function() {
    match = new Game();
  });

  it('Test no score game', function() {
    rollMany(20, 0);
    assert.equal(match.score(), 0);
  });

  it('Test all one game', function() {
    rollMany(20, 1);
    assert.equal(match.score(), 20);
  });

  it('Test one spare', function() {
    rollSpare();
    match.roll(3);
    rollMany(17, 0);
    assert.equal(match.score(), 16);
  });

  it('Test one strike', function() {
    rollStrike();
    match.roll(3);
    match.roll(4);
    rollMany(17, 0);
    assert.equal(match.score(), 24);
  });

  it('Test perfect game', function() {
    rollMany(12, 10);
    assert.equal(match.score(), 300);
  });
});

function rollMany(n, pins) {
  for (let i = 0; i < n; i++) {
    match.roll(pins);
  }
}

function rollSpare() {
  match.roll(5);
  match.roll(5);
}

function rollStrike() {
  match.roll(10);
}