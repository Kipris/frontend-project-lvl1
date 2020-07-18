import readlineSync from 'readline-sync';
import { getUserName, logGreeting } from './utils.js';

const isAnswerCorrect = (answer, correctAnswer) => answer === correctAnswer;

const gameEngine = (description, getRoundInfo, maxRoundsCount = 3) => {
  const userName = getUserName();
  logGreeting(userName);
  console.log(description);
  for (let currentRound = 1; currentRound <= maxRoundsCount; currentRound += 1) {
    if (currentRound > maxRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
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
};

export default gameEngine;
