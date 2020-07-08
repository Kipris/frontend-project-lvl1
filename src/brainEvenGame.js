import readlineSync from 'readline-sync';

const getRandonNumber = () => Math.floor(Math.random() * 30);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const brainEvenGame = (userName, maxRoundsCount = 3) => {
  const iter = (roundsCount) => {
    if (roundsCount === maxRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const number = getRandonNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(number);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
    iter(roundsCount + 1);
  };
  iter(0);
};

const startGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  brainEvenGame(userName);
};

export default startGame;
