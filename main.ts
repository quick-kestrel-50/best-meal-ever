// Write one short text about the best meal ever had to entry.txt.
//
// The text: at 2 a.m. a grandmother made instant noodles while the
// whole house slept, eaten standing up because sitting down would
// have meant the night was over.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  'At 2 a.m. my grandmother made instant noodles in her kitchen while the whole house slept, and I ate them standing up because sitting down would have meant the night was over.';

// The gate allows 1 to 200 characters in a single sentence. Fail loudly
// instead of writing an entry the judge will never see. The text is one
// sentence even though "2 a.m." carries periods, so the guard checks
// length and newlines only, never the period count.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.includes("\n")) {
  throw new Error(`entry text must be one sentence of 1-200 characters, got ${TEXT.length}`);
}

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  // Write the exact text, byte for byte, with no trailing newline.
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, TEXT, "utf-8");
}

main();
