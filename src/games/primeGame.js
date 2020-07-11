/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const primeGame = new Game();

primeGame.logConditions = function logConditions() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

primeGame.executeGame = function executeGame() {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);
  this.setAnswer(answer);
  this.setCorrectAnswer(correctAnswer);
};

export default primeGame;
