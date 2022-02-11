import readlineSync from 'readline-sync';
import { getRandomInt, userName, roundGame } from '../index.js';

export default function playCalc() {
  const arrSignsProblem = ['+', '-', '*'];
  let count = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < roundGame; i += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const getSign = arrSignsProblem[Math.floor(Math.random() * arrSignsProblem.length)];
    let correctAnswer;
    console.log(`Question: ${x} ${getSign} ${y}`);
    if (getSign === '-') {
      correctAnswer = x - y;
    }
    if (getSign === '+') {
      correctAnswer = x + y;
    }
    if (getSign === '*') {
      correctAnswer = x * y;
    }
    const textAnswerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(textAnswerUser)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${Number(textAnswerUser)}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }

  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
