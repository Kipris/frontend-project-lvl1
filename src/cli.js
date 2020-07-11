// eslint-disable-next-line import/extensions
import { getUserName, greeting } from './utils.js';

export default () => {
  const userName = getUserName();
  greeting(userName);
};
