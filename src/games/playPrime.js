import readlineSync from 'readline-sync';
import { userName, getRandomInt, roundGame } from '../index.js';

export default function playPrime() {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundGame; i += 1) {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    const numPrime = ['yes'];
    const textAnswer = readlineSync.question('Your answer: ');
    for (let n = 2; n < num; n += 1) {
      if (num % n === 0) {
        numPrime.pop();
        numPrime.push('no');
        break;
      }
    }
    const correctAnswer = numPrime[numPrime.length - 1];
    // console.log(numPrime);
    // console.log(answer);
    // const textAnswer = readlineSync.question('Your answer: ');
    if (textAnswer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${textAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
