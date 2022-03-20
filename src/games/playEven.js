import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer is "no".';

const isEven = (x) => x % 2 === 0;

const generateRound = () => {
  const x = getRandomInt(1, 100);
  const question = String(x);
  const answer = isEven(x) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(gameDescription, generateRound);
};
