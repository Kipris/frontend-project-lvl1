import gameEngine from '../index.js';
import { getRandomExpression, calcExpression } from '../utils.js';

const conditions = 'What is the result of the expression?';

const executeGame = () => {
	const expression = getRandomExpression();
	const correctAnswer = String(calcExpression(expression));
	return { question: expression, correctAnswer };
};

const calcGame = () => gameEngine(conditions, executeGame);

export default calcGame;
