import readlineSync from 'readline-sync';
import {
  userName, getRandomInt, roundGame, checkAnswer,
} from '../index.js';

export default function playGcd() {
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < roundGame; i += 1) {
    let x = getRandomInt(1, 100);
    let y = getRandomInt(1, 100);
    console.log(`Question: ${x} ${y}`);
    let divisorNum = x;
    while (x !== y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
      divisorNum = x;
    }
    const textAnswer = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(textAnswer, divisorNum)) {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
