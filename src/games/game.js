function Game() {
  this.answer = '';
  this.correctAnswer = '';
}

Game.prototype.isAnswerCorrect = function isAnswerCorrect() {
  return this.answer === this.correctAnswer;
};

Game.prototype.getAnswer = function getAnswers() {
  return this.answer;
};

Game.prototype.getCorrectAnswer = function getCorrectAnswer() {
  return this.correctAnswer;
};

Game.prototype.setAnswer = function setAnswer(answer) {
  this.answer = answer;
};

Game.prototype.setCorrectAnswer = function setCorrectAnswer(correctAnswer) {
  this.correctAnswer = correctAnswer;
};

export default Game;
