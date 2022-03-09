import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const roundGame = 3; // количество раундов игр

export {
  greeting, roundGame,
};
