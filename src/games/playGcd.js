import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generateRound = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));
  return [question, answer];
};

export default () => {
  engine(gameDescription, generateRound);
};
