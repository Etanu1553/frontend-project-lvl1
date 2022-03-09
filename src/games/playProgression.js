import { getRandomInt, genLine } from '../utils.js';

const generateRound = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(2, 10);
  const len = getRandomInt(5, 12);
  const miss = getRandomInt(1, len - 1);
  return [genLine(start, step, len, miss), String(start + miss * step)];
};

const gameDescription = 'What number is missing in the progression?';

export {
  gameDescription, generateRound,
};
