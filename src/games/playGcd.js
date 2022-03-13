import getRandomInt from '../utils.js';

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
  return [`${x} ${y}`, String(gcd(x, y))];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export {
  gameDescription, generateRound,
};
