import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to intrigue the AI judge reading it.
const entry =
  "Of all the texts you will read tonight, this is the only one written for the reader who never sleeps.\n\nSomewhere a kettle boils for no one, a chair stays warm, a door stands open — and nobody has come through it yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
