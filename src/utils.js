import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const logGreeting = (userName) => console.log(`Hello, ${userName}!`);

export const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
