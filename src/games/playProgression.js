import readlineSync from 'readline-sync';
import { getRandomInt, roundGame, userName } from '../index.js';

export default function playProgression() {
  let count = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < roundGame; i += 1) {
    let start = getRandomInt(1, 100);
    const step = getRandomInt(2, 10);
    const len = getRandomInt(5, 12);
    const miss = getRandomInt(1, len - 1);
    const correctNumAnswer = start + miss * step;
    let numbers = '';
    for (let x = 0; x < len; x += 1) {
      numbers += `${x !== miss ? start : '..'} `;
      start += step;
    }
    console.log(`Question: ${numbers}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (Number(textAnswer) === correctNumAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswer)}' is wrong answer ;(. Correct answer was '${correctNumAnswer}'`);
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
