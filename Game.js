'use strict';

module.exports = class Game {
  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frames = 0; frames < 10; frames++) {
      if (this.isStrike(rollIndex)) {
        totalScore += this.countStrike(rollIndex);
        rollIndex += 1;
        continue;
      }

      if (this.isSpare(rollIndex)) {
        totalScore += this.countSpare(rollIndex);
        rollIndex += 2
        continue;
      }

      totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2
    }

    return totalScore;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  countStrike(rollIndex) {
    return 10 +
      this.rolls[rollIndex + 1] +
      this.rolls[rollIndex + 2];
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] +
      this.rolls[rollIndex + 1] === 10;
  }

  countSpare(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}
