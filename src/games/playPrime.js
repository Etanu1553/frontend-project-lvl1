import readlineSync from 'readline-sync';
import {
  userName, getRandomInt, roundGame, checkAnswer,
} from '../index.js';

export default function playPrime() {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundGame; i += 1) {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    let numPrime = 'yes';
    const textAnswer = readlineSync.question('Your answer: ');
    for (let n = 2; n < num; n += 1) {
      if (num % n === 0) {
        numPrime = 'no';
        break;
      }
    }
    if (checkAnswer(textAnswer, numPrime)) {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
