import readlineSync from 'readline-sync';
import { getUserName } from './utils.js';

const MAX_ROUNDS_COUNT = 3;
const isAnswerCorrect = (answer, correctAnswer) => answer === correctAnswer;

const launchGameEngine = (description, getRoundInfo, maxRoundsCount = MAX_ROUNDS_COUNT) => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let currentRound = 1; currentRound <= maxRoundsCount; currentRound += 1) {
    const { question, correctAnswer } = getRoundInfo();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (!isAnswerCorrect(answer, correctAnswer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGameEngine;
