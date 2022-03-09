#!/usr/bin/env node
import engine from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/playProgression.js';

engine(gameDescription, generateRound);
