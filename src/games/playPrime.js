import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { roundGame, checkAnswer } from '../index.js';
import { getRandomInt, isPrime } from '../utils.js';

export default function playPrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundGame; i += 1) {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (!checkAnswer(textAnswer, isPrime(num))) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
