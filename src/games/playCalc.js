import { getRandomInt } from '../utils.js';

const generateRound = () => {
  const signs = '+-*';
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const signIndex = getRandomInt(0, signs.length - 1);
  const array = [x + y, x - y, x * y];
  return [`${x} ${signs[signIndex]} ${y}`, String(array[signIndex])];
};

const gameDescription = 'What is the result of the expression?';

export {
  gameDescription, generateRound,
};
