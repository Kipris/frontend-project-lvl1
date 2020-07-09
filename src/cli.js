// eslint-disable-next-line import/extensions
import { getUserName, greeting } from './common.js';

export default () => {
  const userName = getUserName();
  greeting(userName);
};
