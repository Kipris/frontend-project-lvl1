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

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const executeGame = () => {
	const number = getRandomNumber();
	const correctAnswer = getCorrectAnswer(number);
	return { question: number, correctAnswer };
};

const primeGame = () => gameEngine(conditions, executeGame);

export default primeGame;
