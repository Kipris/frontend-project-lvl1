// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
