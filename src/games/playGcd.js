import readlineSync from 'readline-sync';
import {
  userName, getRandomInt, roundGame, checkAnswer,
} from '../index.js';

export function gcd(x, y) {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

// console.log(gcd(24, 18))

export default function playGcd() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < roundGame; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    console.log(`Question: ${x} ${y}`);
    const divisorNum = gcd(x, y);
    const textAnswer = Number(readlineSync.question('Your answer: '));
    if (!checkAnswer(textAnswer, divisorNum)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
