import { getUserName, logGreeting } from '../utils.js';

export default () => {
  const userName = getUserName();
  logGreeting(userName);
};
