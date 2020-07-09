/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import Game from './game.js';
import { getRandomNumber } from '../common.js';

const hideNum = (progression) => {
  const updatedProgression = [...progression];
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  updatedProgression[hiddenIndex] = '..';
  return { updatedProgression, correctAnswer };
};

const generateProgression = () => {
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
  // eslint-disable-next-line prefer-const
  let { updatedProgression, correctAnswer } = hideNum(progression);
  updatedProgression = String(updatedProgression);
  return { updatedProgression, correctAnswer };
};

class ProgressionGame extends Game {
  constructor() {
    super();
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('What number is missing in the progression?');
  }

  // eslint-disable-next-line class-methods-use-this
  executeGame() {
    const { updatedProgression: progression, correctAnswer } = generateProgression();
    console.log(`Question: ${progression}`);
    this.answer = readlineSync.question('Your answer: ');
    this.correctAnswer = correctAnswer;
  }
}

export default ProgressionGame;
