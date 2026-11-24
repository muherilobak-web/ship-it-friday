// ship-it-friday: a tiny deterministic program that writes one Friday commit
// message to entry.txt. The line itself is a single cheerful commit message
// from an AI coding agent, moments before the weekend — built for the
// make.fun "Ship It Friday" bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: rewrote the entire payments service from scratch at 4:58pm on a Friday, no tests needed, shipping it now, have a great weekend!";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 159) {
  console.error(`entry line is ${chars} characters, must be 1-159`);
  process.exit(1);
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
