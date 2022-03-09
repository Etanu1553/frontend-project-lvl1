const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const genLine = (start, step, len, miss) => {
  let i = start;
  let numbers = '';
  for (let x = 0; x < len; x += 1) {
    numbers += `${x !== miss ? i : '..'} `;
    i += step;
  }
  return numbers;
};

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export {
  getRandomInt, isPrime, genLine, gcd, checkAnswer,
};
