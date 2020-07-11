/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const gcdGame = new Game();

gcdGame.logConditions = function logConditions() {
  console.log('Find the greatest common divisor of given numbers.');
};

gcdGame.executeGame = function executeGame() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getGcd(firstNumber, secondNumber);
  this.setAnswer(Number(answer));
  this.setCorrectAnswer(Number(correctAnswer));
};

export default gcdGame;
