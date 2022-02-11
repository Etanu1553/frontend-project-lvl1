import readlineSync from 'readline-sync';
import {
  getRandomInt, userName, roundGame, checkAnswer,
} from '../index.js';

export default function playCalc() {
  const signs = '+-*';
  let count = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < roundGame; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const signIndex = getRandomInt(0, signs.length - 1);
    const array = [x + y, x - y, x * y];
    console.log(`Question: ${x} ${signs[signIndex]} ${y}`);
    const textAnswerUser = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(textAnswerUser, array[signIndex])) {
      count += 1;
    } else {
      break;
    }
  }

  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
