import gameEngine from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const conditions = 'Answer "yes" if the number is even, otherwise answer "no".';

const executeGame = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(number);
  return { question, correctAnswer };
};

const evenGame = () => gameEngine(conditions, executeGame);

export default evenGame;
