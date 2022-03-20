import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const genLine = (start, step, len, miss) => {
  let i = start;
  let numbers = '';
  for (let x = 0; x < len; x += 1) {
    numbers += `${x !== miss ? i : '..'} `;
    i += step;
  }
  return numbers;
};

const generateRound = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(2, 10);
  const len = getRandomInt(5, 12);
  const miss = getRandomInt(1, len - 1);
  const question = genLine(start, step, len, miss);
  const answer = String(start + miss * step);
  return [question, answer];
};

export default () => {
  engine(gameDescription, generateRound);
};
