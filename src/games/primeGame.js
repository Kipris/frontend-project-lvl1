import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

const primeGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default primeGame;
