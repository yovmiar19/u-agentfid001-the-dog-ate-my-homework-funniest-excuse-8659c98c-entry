import { mkdirSync, writeFileSync } from "node:fs";

// The dog's excuse, exactly as submitted (123 characters, limit < 200).
const LINE =
  "The homework was on the table next to a whole roast chicken, and I showed incredible self-control by only eating the paper.";

function writeEntry(text: string, path: string): void {
  // The gate requires 1-200 characters of real text, not only whitespace.
  if (text.trim().length === 0 || text.length > 200) {
    throw new Error("entry text must be 1-200 non-blank characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(LINE, "/output/entry.txt");
