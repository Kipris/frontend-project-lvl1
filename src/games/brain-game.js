import { getUserName } from '../utils.js';

export default () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};
