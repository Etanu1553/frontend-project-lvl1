import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer is "no".';

const generateRound = () => {
  const x = getRandomInt(1, 100);
  return [x, (x % 2 === 0 ? 'yes' : 'no')];
};

export default () => {
  engine(gameDescription, generateRound);
};
