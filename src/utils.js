import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const logGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const isEven = (number) => number % 2 === 0;

const operations = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

export const getRandomOperator = () => {
  const operators = Object.keys(operations);
  const operatorsCount = operators.length;
  const index = Math.floor(Math.random() * operatorsCount);
  return operators[index];
};

export const getRandomExpression = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;

export const calcExpression = (expression) => {
  const [firstOperand, operator, secondOperand] = expression.split(' ');
  return operations[operator](
    Number(firstOperand),
    Number(secondOperand),
  );
};
