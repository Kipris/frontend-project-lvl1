import { getUserName, greeting } from './utils.js';
import evenGame from './games/evenGame.js';
import calcGame from './games/calcGame.js';
import gcdGame from './games/gcdGame.js';
import progressionGame from './games/progressionGame.js';
import primeGame from './games/primeGame.js';

const games = {
  evenGame,
  calcGame,
  gcdGame,
  progressionGame,
  primeGame,
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

  const game = games[gameName];
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
      const answer = game.getAnswer();
      const correctAnswer = game.getCorrectAnswer();
      computerScore += 1;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
    doGameRound(roundsCount + 1);
  };
  doGameRound(0);
};

export default startGame;
