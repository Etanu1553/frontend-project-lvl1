import readlineSync from 'readline-sync';
import { userName, getRandomInt, round } from '../index.js';

export default function progression() {
  let count = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < round; i += 1) {
    let start = getRandomInt(1, 100);
    const step = getRandomInt(2, 10);
    const len = getRandomInt(5, 12);
    const miss = getRandomInt(1, len - 1);
    const answer = start + miss * step;
    let numbers = '';
    for (let x = 0; x < len; x += 1) {
      numbers += `${x !== miss ? start : '...'} `;
      start += step;
    }
    console.log(`Question: ${numbers}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (Number(textAnswer) === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswer)}' is wrong answer ;(. Correct answer was '${answer}'`);
      break;
    }
  }
  console.log(count === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
