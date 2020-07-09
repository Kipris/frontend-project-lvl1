/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomExpression, calcExpression } from '../common.js';

const calcGame = new Game();

calcGame.logConditions = function logConditions() {
  console.log('What is the result of the expression?');
};

calcGame.executeGame = function executeGame() {
  const expression = getRandomExpression();
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = calcExpression(expression);
  this.setAnswer(Number(answer));
  this.setCorrectAnswer(Number(correctAnswer));
};

export default calcGame;
