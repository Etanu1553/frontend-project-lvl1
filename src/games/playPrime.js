import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const x = getRandomInt(1, 100);
  const question = String(x);
  const answer = isPrime(x) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(gameDescription, generateRound);
};
