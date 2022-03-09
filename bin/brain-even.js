#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import { greeting, roundGame } from '../src/cli.js';
// import { checkAnswer } from '../src/utils.js';
import engine from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/playEven.js';

// playEven();

/*
function engine(description, round) {
  const UserName = greeting();
  console.log(description);
  for (let i = 0; i < roundGame; i += 1) {
    const [number, correct] = round();
    console.log(`Question: ${number}`);
    const textAnswer = readlineSync.question('Your answer: ');
    if (!checkAnswer(textAnswer, correct)) {
      console.log(`Let's try again, ${UserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${UserName}!`);
}
*/

engine(gameDescription, generateRound);
