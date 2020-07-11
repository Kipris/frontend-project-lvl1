import { getUserName, greeting } from './utils.js';

const logGameResults = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const logRoundResult = (answer, correctAnswer, userName) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
}

const gameEngine = (conditions, executeGame) => {
  const userName = getUserName();
  greeting(userName);
  console.log(conditions);
  const maxRoundsCount = 3;
  const doGameRound = (roundsCount) => {
    if (roundsCount === maxRoundsCount) {
      logGameResults(userName);
      return;
    }
    const { question, correctAnswer } = executeGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    logRoundResult(answer, correctAnswer, userName);
    doGameRound(roundsCount + 1);
  };
  doGameRound(0);
};

export default gameEngine;
