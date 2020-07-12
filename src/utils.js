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
	'+': function (firstOperand, secondOperand) {
		return firstOperand + secondOperand;
	},
	'-': function (firstOperand, secondOperand) {
		return firstOperand - secondOperand;
	},
	'*': function (firstOperand, secondOperand) {
		return firstOperand * secondOperand;
	},
};

export const getRandomOperator = () => {
	const operators = Object.keys(operations);
	const index = Math.floor(Math.random() * 3);
	return operators[index];
};

export const getRandomExpression = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;

const has = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

export const calcExpression = (expression) => {
	const [firstOperand, operator, secondOperand] = expression.split(' ');
	if (has(operations, operator)) {
		return operations[operator](
			Number(firstOperand),
			Number(secondOperand),
		);
	}
	return 'Invalid operation';
};
