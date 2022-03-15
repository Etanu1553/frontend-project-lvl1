import getRandomInt from '../utils.js';
import engine from '../index.js';

const signs = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const generateAnswer = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const signIndex = getRandomInt(0, signs.length - 1);
  const question = `${x} ${signs[signIndex]} ${y}`;
  const correctAnswer = String(generateAnswer(x, y, signs[signIndex]));
  return [question, correctAnswer];
};

export default () => {
  engine(gameDescription, generateRound);
};
