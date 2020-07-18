import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (startNumber, progressionStep, maxProgressionLength = 10) => {
  const progression = [];
  for (let i = 0, number = startNumber;
    i < maxProgressionLength;
    i += 1, number += progressionStep) {
    progression.push(number);
  }
  return progression;
};

const getQuestion = (progression, indexToHide) => {
  const updatedProgression = [...progression];
  updatedProgression[indexToHide] = '..';
  return updatedProgression.join(' ');
};

const getRoundInfo = () => {
  const startNum = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 10);
  const progression = generateProgression(startNum, progressionStep);
  const indexToHide = getRandomNumber(0, progression.length - 1);
  const question = getQuestion(progression, indexToHide);
  const correctAnswer = String(progression[indexToHide]);
  // console.log(question, correctAnswer);
  return { question, correctAnswer };
};

const startProgressionGame = () => gameEngine(description, getRoundInfo);

export default startProgressionGame;
