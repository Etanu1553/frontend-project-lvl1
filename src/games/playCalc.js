import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { roundGame, checkAnswer } from '../index.js';
import { getRandomInt } from '../utils.js';

export default function playCalc() {
  const signs = '+-*';
  console.log('What is the result of the expression?');
  for (let i = 0; i < roundGame; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const signIndex = getRandomInt(0, signs.length - 1);
    const array = [x + y, x - y, x * y];
    console.log(`Question: ${x} ${signs[signIndex]} ${y}`);
    const textAnswerUser = Number(readlineSync.question('Your answer: '));
    if (!checkAnswer(textAnswerUser, array[signIndex])) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
