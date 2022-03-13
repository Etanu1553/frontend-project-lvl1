import readlineSync from 'readline-sync';

const roundGame = 3; // количество раундов игры

export default function engine(description, round) {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(description);
  for (let i = 0; i < roundGame; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${UserName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${UserName}!`);
}
