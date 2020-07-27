import launchGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const mapOperatorToOperation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

const calculateExpression = (firstOperand, operator, secondOperand) => (
  mapOperatorToOperation[operator](
    firstOperand,
    secondOperand,
  )
);

const getRandomOperator = () => {
  const operators = Object.keys(mapOperatorToOperation);
  const operatorsCount = operators.length;
  const index = getRandomNumber(0, operatorsCount - 1);
  return operators[index];
};

const getRoundInfo = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculateExpression(firstOperand, operator, secondOperand));
  return { question, correctAnswer };
};

const startCalcGame = () => launchGameEngine(description, getRoundInfo);

export default startCalcGame;
