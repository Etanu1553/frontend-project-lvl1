#!/usr/bin/env node
import greeting from '../src/cli.js';

const userName = greeting();
console.log(`Hello, ${userName}!`); // экспортируем приветствие
