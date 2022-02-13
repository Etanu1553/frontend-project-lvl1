import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { roundGame, checkAnswer } from '../index.js';
import { getRandomInt } from '../utils.js';

export default function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  for (let i = 0; i < roundGame; i += 1) {
    const getNumForUser = getRandomInt(1, 100);
    console.log(`Question: ${getNumForUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    const correct = (getNumForUser % 2 === 0 ? 'yes' : 'no');
    if (!checkAnswer(textAnswer, correct)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
