import readlineSync from 'readline-sync';
import { getUserName, greeting } from './utils.js';

const isAnswerCorrect = (answer, correctAnswer) => answer === correctAnswer;

const gameEngine = (conditions, executeGame) => {
	const userName = getUserName();
	greeting(userName);
	console.log(conditions);
	const maxRoundsCount = 3;
	const doGameRound = (roundsCount) => {
		if (roundsCount === maxRoundsCount) {
			console.log(`Congratulations, ${userName}!`);
			return;
		}
		const { question, correctAnswer } = executeGame();
		console.log(`Question: ${question}`);
		const answer = readlineSync.question('Your answer: ');
		if (isAnswerCorrect(answer, correctAnswer)) {
			console.log('Correct!');
		} else {
			console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
			console.log(`Let's try again, ${userName}!`);
			return;
		}
		doGameRound(roundsCount + 1);
	};
	doGameRound(0);
};

export default gameEngine;
