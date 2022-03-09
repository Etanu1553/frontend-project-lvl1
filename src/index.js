import readlineSync from 'readline-sync';
import { greeting, roundGame } from './cli.js';
import { checkAnswer } from './utils.js';

export default function engine(description, round) {
  const UserName = greeting();
  console.log(description);
  for (let i = 0; i < roundGame; i += 1) {
    const [text, correct] = round();
    console.log(`Question: ${text}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (!checkAnswer(textAnswer, correct)) {
      console.log(`Let's try again, ${UserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${UserName}!`);
}
