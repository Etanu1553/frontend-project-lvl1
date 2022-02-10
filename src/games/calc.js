import readlineSync from 'readline-sync';
import { getRandomInt, userName } from '../index.js';

export default function calc() {
  const arrSignsProblem = ['+', '-', '*'];
  let count = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const signs = arrSignsProblem[Math.floor(Math.random() * arrSignsProblem.length)];
    let answer;
    console.log(`Question: ${x} ${signs} ${y}`);
    if (signs === '-') {
      answer = x - y;
    }
    if (signs === '+') {
      answer = x + y;
    }
    if (signs === '*') {
      answer = x * y;
    }
    const textAnswer = readlineSync.question('Your answer: ');
    if (answer === Number(textAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswer)}' is wrong answer ;(. Correct answer was '${answer}'`);
      break;
    }
  }

  console.log(count === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
