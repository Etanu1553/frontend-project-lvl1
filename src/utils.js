const getRandomInt = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isPrime(num) {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function gcd(x, y) {
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
}

function genLine(start, step, len, miss) {
  let i = start;
  let numbers = '';
  for (let x = 0; x < len; x += 1) {
    numbers += `${x !== miss ? i : '..'} `;
    i += step;
  }
  return numbers;
}

export {
  getRandomInt, isPrime, genLine, gcd,
};
