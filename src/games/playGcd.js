import readlineSync from 'readline-sync';
import { userName, getRandomInt, roundGame } from '../index.js';

export default function playGcd() {
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < roundGame; i += 1) {
    let x = getRandomInt(1, 100);
    let y = getRandomInt(1, 100);
    console.log(`Question: ${x} ${y}`);
    let gcdNum;
    while (x !== y) {
      if (x > y) {
        x -= y;
      } else {
        y -= x;
      }
      gcdNum = x;
    }
    const textAnswer = readlineSync.question('Your answer: ');
    if (gcdNum === Number(textAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswer)}' is wrong answer ;(. Correct answer was '${gcdNum}'`);
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
