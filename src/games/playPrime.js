import getRandomInt from '../utils.js';

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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export {
  gameDescription, generateRound,
};
