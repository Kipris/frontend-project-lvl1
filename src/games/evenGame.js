/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber, isEven } from '../utils.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const evenGame = new Game();

evenGame.logConditions = function logConditions() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

evenGame.executeGame = function executeGame() {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);
  this.setAnswer(answer);
  this.setCorrectAnswer(correctAnswer);
};

export default evenGame;
