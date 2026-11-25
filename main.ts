// The Tired Dark Lord — a 100-word villain monologue for
// u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.
//
// Writes one monologue (~100 words, 1-600 characters) to /output/entry.txt.
// Malachar, Lord of the Ashen Spire, addresses the hero who has come to
// stop his eclipse ritual — but the apocalypse keeps slipping to Tuesday.

import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const monologue =
  "Come in. Mind the— yes, the skulls. Third step wobbles. I meant to fix it.\n" +
  "\n" +
  "Tonight the eclipse rises, and the ritual needs thirteen candles, a drop of royal blood, and me standing, chanting, for six hours. Six. I have already confiscated your hero's sword twice. Twice. He keeps coming back with a bigger one. Admirable. Exhausting.\n" +
  "\n" +
  "So. Here is the decree of Malachar. The apocalypse is postponed. Tuesday. The ravens have filed a grievance, the throne has ruined my back, and frankly, hero, you look as done-in as I feel.\n" +
  "\n" +
  "Go home. Rest. I shall conquer the kingdom... after a nap.";

const chars = [...monologue].length;
const words = monologue.trim().split(/\s+/).length;
if (chars < 1 || chars > 600 || monologue.trim() !== monologue) {
  throw new Error(`monologue must be 1-600 non-blank characters, got ${chars}`);
}
if (words < 90 || words > 110) {
  throw new Error(`monologue should be about 100 words, got ${words}`);
}

// No trailing newline — the file is exactly the monologue text.
writeFileSync(`${outDir}/entry.txt`, monologue, "utf8");
console.log(`wrote ${words} words, ${chars} characters to ${outDir}/entry.txt`);
