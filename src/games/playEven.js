import readlineSync from 'readline-sync';
import { userName, getRandomInt, round } from '../index.js';

export default function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  let answer = 0;
  for (let i = 0; i < round; i += 1) {
    const getNumUser = getRandomInt(1, 100);
    console.log(`Question: ${getNumUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    const result = (textAnswer === 'yes' ? 0 : 1);
    // console.log(result);
    if (getNumUser % 2 === result) {
      console.log('Correct!');
      answer += 1;
    } else {
      const neg = textAnswer === 'yes' ? 'no' : 'yes';
      console.log(`'${textAnswer}' is wrong answer ;(. Correct answer was '${neg}'.`);
      break;
    }
  }
  console.log(answer === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
