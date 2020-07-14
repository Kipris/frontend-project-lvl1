import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

const logGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

const isAnswerCorrect = (answer, correctAnswer) => answer === correctAnswer;

const gameEngine = (condition, getQuestionAndCorrectAnswer, maxRoundsCount = 3) => {
  const userName = getUserName();
  logGreeting(userName);
  if (!condition && !getQuestionAndCorrectAnswer) {
    return;
  }
  console.log(condition);
  const doGameRound = (roundsCount) => {
    if (roundsCount === maxRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, correctAnswer } = getQuestionAndCorrectAnswer();
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
