class Game {
  constructor() {
    this.answer = '';
    this.correctAnswer = '';
  }

  // eslint-disable-next-line class-methods-use-this
  logConditions() {
    console.log('Condition text');
  }

  isAnswerCorrect() {
    return this.answer === this.correctAnswer;
  }

  getAnswers() {
    const { answer, correctAnswer } = this;
    return { answer, correctAnswer };
  }
}

export default Game;
