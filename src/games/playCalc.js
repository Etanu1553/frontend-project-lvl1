import getRandomInt from '../utils.js';

const generateAnswer = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const generateRound = () => {
  const signs = ['+', '-', '*'];
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const signIndex = getRandomInt(0, signs.length - 1);
  return [`${x} ${signs[signIndex]} ${y}`, String(generateAnswer(x, y, signs[signIndex]))];
};

const gameDescription = 'What is the result of the expression?';

export {
  gameDescription, generateRound,
};
