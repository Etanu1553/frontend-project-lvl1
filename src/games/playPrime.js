import readlineSync from 'readline-sync';
import {
  userName, getRandomInt, roundGame, checkAnswer,
} from '../index.js';

export function isPrime(num) {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function playPrime() {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundGame; i += 1) {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (checkAnswer(textAnswer, isPrime(num))) {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
