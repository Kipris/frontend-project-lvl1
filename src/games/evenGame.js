import launchGameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundInfo = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

const startEvenGame = () => launchGameEngine(description, getRoundInfo);

export default startEvenGame;
