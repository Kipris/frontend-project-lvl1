/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomExpression, calcExpression } from '../common.js';

class CalcGame extends Game {
  constructor() {
    super();
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('What is the result of the expression?');
  }

  executeGame() {
    const expression = getRandomExpression();
    console.log(`Question: ${expression}`);
    this.answer = readlineSync.question('Your answer: ');
    this.correctAnswer = calcExpression(expression);
  }
}

export default CalcGame;
