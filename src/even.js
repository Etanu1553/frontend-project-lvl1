import readlineSync from 'readline-sync';

// export function name() {
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
// }

// выбираем случайное число
function getRandomInt(max) {
  const numRandom = Math.floor(Math.random() * max);
  return numRandom;
}
// записываем его в константу
export default function even() {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  const answer = [];
  for (let i = 0; i < 3; i += 1) {
    const numForUser = getRandomInt(100);
    console.log(`Question: ${numForUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    // const result = (textAnswer === 'yes' ? 0 : 1);
    // console.log(result);
    if (numForUser % 2 === 0 && textAnswer === 'yes') {
      console.log('Correct!');
      answer.push(i);
    }
    if (numForUser % 2 !== 0 && textAnswer === 'no') {
      console.log('Correct!');
      answer.push(i);
    }
    if (numForUser % 2 !== 0 && textAnswer === 'yes') {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'');
      break;
    }
    if (numForUser % 2 === 0 && textAnswer === 'no') {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'');
      break;
    }
  }
  console.log(answer.length === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}

// arrAnswer.length === 1
// arrAnswer.length === 1
