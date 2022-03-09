import { getRandomInt, isPrime } from '../utils.js';

const generateRound = () => {
  const x = getRandomInt(1, 100);
  return [x, isPrime(x)];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export {
  gameDescription, generateRound,
};
