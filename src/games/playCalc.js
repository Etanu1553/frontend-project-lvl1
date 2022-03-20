import getRandomInt from '../utils.js';
import engine from '../index.js';

const operators = ['+', '-', '*'];
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
  const signIndex = getRandomInt(0, operators.length - 1);
  const question = `${x} ${operators[signIndex]} ${y}`;
  const answer = String(generateAnswer(x, y, operators[signIndex]));
  return [question, answer];
};

export default () => {
  engine(gameDescription, generateRound);
};
