#!/usr/bin/env node
import { greeting } from '../src/cli.js';

// console.log('test');
const userName = greeting();
console.log(`Hello, ${userName}!`); // экспортируем приветствие
