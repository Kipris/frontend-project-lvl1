/* eslint-disable func-names */
import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const greeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const isEven = (number) => number % 2 === 0;

const operations = {
  '+': function (op1, op2) {
    return op1 + op2;
  },
  '-': function (op1, op2) {
    return op1 - op2;
  },
  '*': function (op1, op2) {
    return op1 * op2;
  },
};

export const getRandomOperator = () => {
  const operators = Object.keys(operations);
  const index = Math.floor(Math.random() * 3);
  return operators[index];
};

export const getRandomExpression = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;

export const calcExpression = (expression) => {
  const [operand1, operator, operand2] = expression.split(' ');
  // if operations[operator] exists
  return operations[operator](Number(operand1), Number(operand2));
};
