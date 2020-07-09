/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../common.js';

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

class PrimeGame extends Game {
  constructor() {
    super();
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  // eslint-disable-next-line class-methods-use-this
  executeGame() {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    this.answer = readlineSync.question('Your answer: ');
    this.correctAnswer = getCorrectAnswer(number);
  }
}

export default PrimeGame;
