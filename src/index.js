import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`); // экспортируем приветствие

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}; // экспортируем рандомное число мин и макс

const roundGame = 3; // количество раундов игр

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
}

export {
  userName, getRandomInt, roundGame, checkAnswer,
};
