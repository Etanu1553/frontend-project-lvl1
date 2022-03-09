import { getRandomInt } from '../utils.js';

const generateRound = () => {
  const x = getRandomInt(1, 100);
  return [x, (x % 2 === 0 ? 'yes' : 'no')];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer is "no".';

export {
  gameDescription, generateRound,
};
