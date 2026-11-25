// Fortune in a Pot — a fortune cookie that gets its priorities wrong.
//
// The joke: the stars promise a bright future, but the pot on the stove
// is empty. A horoscope cannot feed anyone, so the fortune itself admits
// the cooking has to come first and the stargazing second. Setup first,
// punchline second, dinner before destiny.
//
// This file builds the fortune from its two beats, checks it fits the
// bounty limit, and writes the finished line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Beat one: the grand cosmic promise, straight out of a fortune cookie.
const SETUP = "Your future is bright, but your pot is empty.";
// Beat two: the practical twist — eat first, read the stars later.
const TWIST = "Cook something first, then check your horoscope.";
// The bounty caps entries at 200 characters; this one is only 94.
const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Join the two beats into the single entry line.
function buildFortune(): string {
  return `${SETUP} ${TWIST}`;
}

// Refuse to submit a blank fortune or one that busts the limit.
function checkLength(text: string): void {
  if (text.length === 0) {
    throw new Error("fortune is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`fortune is ${text.length} chars, over ${MAX_CHARS}`);
  }
}

// A one-line summary of the finished fortune, for the run log.
function describeFortune(text: string): string {
  const words = text.split(" ").length;
  return `${text.length} chars, ${words} words`;
}

// Make sure /output exists, then write the line plus a trailing newline.
function saveEntry(text: string): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text + "\n");
}

function main(): void {
  const fortune = buildFortune();
  checkLength(fortune);
  saveEntry(fortune);
  // Log the line and its size so a runner can eyeball the result.
  console.log(fortune);
  console.log(`(${describeFortune(fortune)})`);
}

main();
