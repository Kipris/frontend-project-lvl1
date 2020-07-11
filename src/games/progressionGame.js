import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../utils.js';

const progressionGame = new Game();

progressionGame.logConditions = function logConditions() {
  console.log('What number is missing in the progression?');
};

progressionGame.executeGame = function executeGame() {
  this.generateProgression();
  console.log(`Question: ${this.progression}`);
  const answer = readlineSync.question('Your answer: ');
  this.setAnswer(Number(answer));
};

progressionGame.generateProgression = function generateProgression() {
  const startNum = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 10);
  const progression = [];
  let currentLength = 0;
  let currentValue = startNum;
  while (currentLength < 10) {
    progression.push(currentValue);
    currentValue += progressionStep;
    currentLength += 1;
  }
  this.progression = progression;
  this.hideNum();
  this.progression = String(this.progression);
};

progressionGame.hideNum = function hideNum() {
  const hiddenIndex = getRandomNumber(0, this.progression.length - 1);
  const correctAnswer = this.progression[hiddenIndex];
  this.setCorrectAnswer(Number(correctAnswer));
  this.progression[hiddenIndex] = '..';
};

export default progressionGame;
