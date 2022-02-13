import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { roundGame, checkAnswer } from '../index.js';
import { getRandomInt, genLine } from '../utils.js';

export default function playProgression() {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < roundGame; i += 1) {
    const start = getRandomInt(1, 100);
    const step = getRandomInt(2, 10);
    const len = getRandomInt(5, 12);
    const miss = getRandomInt(1, len - 1);
    const correctNumAnswer = start + miss * step;
    const numbers = genLine(start, step, len, miss);
    console.log(`Question: ${numbers}`);
    const textAnswer = Number(readlineSync.question('Your answer: '));
    if (!checkAnswer(textAnswer, correctNumAnswer)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
