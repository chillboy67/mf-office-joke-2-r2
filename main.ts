// mf-office-joke-2-r2: one office joke, written out for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our office has an open-plan layout, which is just a fancy way of saying nowhere to hide from Dave's conference calls.";

// The entry is exactly one line: the joke above, plus a trailing newline.
// The grader reads it back from entry.txt in the output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE + "\n", "utf8");
console.log("Wrote entry.txt");
