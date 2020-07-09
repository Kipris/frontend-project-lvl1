/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandonNumber } from '../common.js';

const getCorrectAnswer = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getCorrectAnswer(secondNumber, firstNumber % secondNumber);
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
    const firstNumber = getRandonNumber();
    const secondNumber = getRandonNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    this.answer = readlineSync.question('Your answer: ');
    this.correctAnswer = getCorrectAnswer(firstNumber, secondNumber);
  }
}

export default GcdGame;
