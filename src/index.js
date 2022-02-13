import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`); // экспортируем приветствие

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
  userName, roundGame, checkAnswer,
};
