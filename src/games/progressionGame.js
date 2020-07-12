import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const conditions = 'What number is missing in the progression?';

const hideNum = (progression) => {
	const updatedProgression = [...progression];
	const hiddenIndex = getRandomNumber(0, progression.length - 1);
	const correctAnswer = String(progression[hiddenIndex]);
	updatedProgression[hiddenIndex] = '..';
	return { progression: updatedProgression, correctAnswer };
};

const generateProgression = () => {
	const startNum = getRandomNumber(1, 20);
	const progressionStep = getRandomNumber(1, 10);
	const progression = [];
	let currentLength = 0;
	let currentValue = startNum;
	while (currentLength < 10) {
		progression.push(currentValue);
		currentValue += progressionStep;
		currentLength += 1;
	}
	const { progression: updatedProgression, correctAnswer } = hideNum(progression);
	return { progression: updatedProgression.join(', '), correctAnswer };
};

const executeGame = () => {
	const { progression, correctAnswer } = generateProgression();
	return { question: progression, correctAnswer };
};

const progressionGame = () => gameEngine(conditions, executeGame);

export default progressionGame;
