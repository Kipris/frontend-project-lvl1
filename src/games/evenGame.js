import gameEngine from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

const evenGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default evenGame;
