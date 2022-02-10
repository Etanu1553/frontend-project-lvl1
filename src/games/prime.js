import readlineSync from 'readline-sync';
import { userName, getRandomInt, round } from '../index.js';

export default function prime() {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < round; i += 1) {
    console.log(getRandomInt(1, 100));
  }
  console.log(count === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}
