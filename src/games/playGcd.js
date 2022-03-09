import { getRandomInt, gcd } from '../utils.js';

const generateRound = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  return [`${x} ${y}`, String(gcd(x, y))];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export {
  gameDescription, generateRound,
};
