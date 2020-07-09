/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber, isEven } from '../common.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

class EvenGame extends Game {
  constructor() {
    super();
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }

  executeGame() {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    this.answer = readlineSync.question('Your answer: ');
    this.correctAnswer = getCorrectAnswer(number);
  }
}

export default EvenGame;
