/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../common.js';

const getGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

class GcdGame extends Game {
  constructor() {
    super();
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('Find the greatest common divisor of given numbers.');
  }

  executeGame() {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    this.answer = Number(readlineSync.question('Your answer: '));
    this.correctAnswer = Number(getGcd(firstNumber, secondNumber));
  }
}

export default GcdGame;
