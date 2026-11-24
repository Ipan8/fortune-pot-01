import * as fs from "node:fs";

// Fortune in a Pot — a fortune-cookie style fortune for a pot.
// Entry (95 chars, limit 200): "Your future is bright, but your pot is
// empty. Cook something first, then check your horoscope."
const ENTRY =
  "Your future is bright, but your pot is empty. " +
  "Cook something first, then check your horoscope.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
