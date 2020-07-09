class Game {
  constructor() {
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('What is the result of the expression?');
  }

  isAnswerCorrect() {
    return Number(this.answer) === Number(this.correctAnswer);
  }

  getAnswers() {
    const { answer, correctAnswer } = this;
    return { answer, correctAnswer };
  }

  getWinner() {
    return this.winner;
  }

  setWinner(winner) {
    this.winner = winner;
  }
}

export default Game;
