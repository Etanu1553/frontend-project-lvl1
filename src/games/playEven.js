import readlineSync from 'readline-sync';
import {
  userName, getRandomInt, roundGame, checkAnswer,
} from '../index.js';

export default function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  let count = 0;
  for (let i = 0; i < roundGame; i += 1) {
    const getNumForUser = getRandomInt(1, 100);
    console.log(`Question: ${getNumForUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    const correct = (getNumForUser % 2 === 0 ? 'yes' : 'no');
    if (checkAnswer(textAnswer, correct)) {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
