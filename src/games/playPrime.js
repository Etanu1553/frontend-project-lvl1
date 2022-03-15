import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const x = getRandomInt(1, 100);
  return [x, isPrime(x)];
};

export default () => {
  engine(gameDescription, generateRound);
};
