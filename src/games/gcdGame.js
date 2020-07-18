import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGcd = (firstNumber, secondNumber) => (
  secondNumber === 0 ? firstNumber : getGcd(secondNumber, firstNumber % secondNumber)
);

const description = 'Find the greatest common divisor of given numbers.';

const getRoundInfo = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return { question, correctAnswer };
};

const startGcdGame = () => gameEngine(description, getRoundInfo);

export default startGcdGame;
