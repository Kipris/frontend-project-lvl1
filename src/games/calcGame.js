import gameEngine from '../index.js';
import { getRandomExpression, calcExpression } from '../utils.js';

const condition = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomExpression();
  const correctAnswer = String(calcExpression(question));
  return { question, correctAnswer };
};

const calcGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default calcGame;
