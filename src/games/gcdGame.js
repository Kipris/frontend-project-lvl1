import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const condition = 'Find the greatest common divisor of given numbers.';

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return { question, correctAnswer };
};

const gcdGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default gcdGame;
