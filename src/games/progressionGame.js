import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const condition = 'What number is missing in the progression?';

const generateProgression = (startNum, progressionStep) => {
  const progression = [];
  let currentLength = 0;
  let currentValue = startNum;
  while (currentLength < 10) {
    progression.push(currentValue);
    currentValue += progressionStep;
    currentLength += 1;
  }
  return progression;
};

const getQuestion = (progression, indexToHide) => {
  const updatedProgression = [...progression];
  updatedProgression[indexToHide] = '..';
  return updatedProgression.join(', ');
};

const getQuestionAndCorrectAnswer = () => {
  const startNum = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 10);
  const progression = generateProgression(startNum, progressionStep);
  const indexToHide = getRandomNumber(0, progression.length - 1);
  const question = getQuestion(progression, indexToHide);
  const correctAnswer = String(progression[indexToHide]);
  return { question, correctAnswer };
};

const progressionGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default progressionGame;
