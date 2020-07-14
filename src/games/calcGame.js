import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const condition = 'What is the result of the expression?';

const mapOperatorToOperation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

const calcExpression = (expression) => {
  const [firstOperand, operator, secondOperand] = expression.split(' ');
  return mapOperatorToOperation[operator](
    Number(firstOperand),
    Number(secondOperand),
  );
};

const getRandomOperator = () => {
  const operators = Object.keys(mapOperatorToOperation);
  const operatorsCount = operators.length;
  const index = Math.floor(Math.random() * operatorsCount);
  return operators[index];
};

const getRandomExpression = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomExpression();
  const correctAnswer = String(calcExpression(question));
  return { question, correctAnswer };
};

const calcGame = () => gameEngine(condition, getQuestionAndCorrectAnswer);

export default calcGame;
