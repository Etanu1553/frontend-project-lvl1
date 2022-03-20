import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function engine(description, makeRound) {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
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
