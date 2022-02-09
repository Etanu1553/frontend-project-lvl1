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
  let answer = 0;
  for (let i = 0; i < 3; i += 1) {
    const numForUser = getRandomInt(100);
    console.log(`Question: ${numForUser}`);
    const textAnswer = readlineSync.question('Your answer: ');
    const result = (textAnswer === 'yes' ? 0 : 1);
    // console.log(result);
    if (numForUser % 2 === result) {
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

// arrAnswer.length === 1
// arrAnswer.length === 1
