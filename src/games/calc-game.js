import launchGameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const mapOperatorToOperation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

const calculateExpression = (firstOperand, operator, secondOperand) => (
  String(mapOperatorToOperation[operator](
    firstOperand,
    secondOperand,
  ))
);

const getRandomOperator = () => {
  const operators = Object.keys(mapOperatorToOperation);
  const operatorsCount = operators.length;
  const index = getRandomNumber(0, operatorsCount - 1);
  return operators[index];
};

const getRandomExpression = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = getRandomOperator();
  return { firstOperand, operator, secondOperand };
};

const getRoundInfo = () => {
  const { firstOperand, operator, secondOperand } = getRandomExpression();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = calculateExpression(firstOperand, operator, secondOperand);
  return { question, correctAnswer };
};

const startCalcGame = () => launchGameEngine(description, getRoundInfo);

export default startCalcGame;
