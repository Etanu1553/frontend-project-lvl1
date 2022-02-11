import readlineSync from 'readline-sync';
import { getRandomInt, userName, round } from '../index.js';

export default function playCalc() {
  const arrSignsProblem = ['+', '-', '*'];
  let count = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < round; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const getSign = arrSignsProblem[Math.floor(Math.random() * arrSignsProblem.length)];
    let rightAnswer;
    console.log(`Question: ${x} ${getSign} ${y}`);
    if (getSign === '-') {
      rightAnswer = x - y;
    }
    if (getSign === '+') {
      rightAnswer = x + y;
    }
    if (getSign === '*') {
      rightAnswer = x * y;
    }
    const textAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === Number(textAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswer)}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
  }

  console.log(count === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
