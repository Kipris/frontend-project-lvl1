import readlineSync from 'readline-sync';

const MAX_ROUNDS_COUNT = 3;
const isAnswerCorrect = (answer, correctAnswer) => answer === correctAnswer;

const launchGameEngine = (description, getRoundInfo, maxRoundsCount = MAX_ROUNDS_COUNT) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
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
