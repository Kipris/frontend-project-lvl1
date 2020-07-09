/* eslint-disable import/extensions */
import { getUserName, greeting } from './common.js';
import EvenGame from './games/evenGame.js';
import CalcGame from './games/calcGame.js';

const createGame = (gameName) => {
  switch (gameName) {
    case 'even-game': return new EvenGame();
    case 'calc-game': return new CalcGame();
    default: return false;
  }
};

const logGameResults = (winner, userName) => {
  const gameResults = winner === 'user'
    ? `Congratulations, ${userName}!`
    : `You loose, ${userName}!`;
  console.log(gameResults);
};

const startGame = (gameName) => {
  const userName = getUserName();
  greeting(userName);

  const game = createGame(gameName);
  game.logConditions();

  let userScore = 0;
  let computerScore = 0;
  const maxRoundsCount = 3;
  const doGameRound = (roundsCount) => {
    if (roundsCount === maxRoundsCount) {
      const winner = userScore > computerScore ? 'user' : 'computer';
      logGameResults(winner, userName);
      return;
    }

    game.executeGame();

    if (game.isAnswerCorrect()) {
      userScore += 1;
      console.log('Correct!');
    } else {
      const { answer, correctAnswer } = game.getAnswers();
      computerScore += 1;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
    doGameRound(roundsCount + 1);
  };
  doGameRound(0);
};

export default startGame;
