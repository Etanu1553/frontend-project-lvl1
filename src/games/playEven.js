import readlineSync from 'readline-sync';
import { userName, getRandomInt, roundGame } from '../index.js';

export default function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  let count = 0;
  for (let i = 0; i < roundGame; i += 1) {
    const getNumForUser = getRandomInt(1, 100);
    console.log(`Question: ${getNumForUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    const correct = (textAnswer === 'yes' ? 0 : 1);
    // console.log(result);
    if (getNumForUser % 2 === correct) {
      console.log('Correct!');
      count += 1;
    } else {
      const negCorrect = textAnswer === 'yes' ? 'no' : 'yes';
      console.log(`'${textAnswer}' is wrong answer ;(. Correct answer was '${negCorrect}'.`);
      break;
    }
  }
  console.log(count === roundGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
