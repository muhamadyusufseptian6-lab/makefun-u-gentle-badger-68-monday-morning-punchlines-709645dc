// Monday Morning Punchlines — entry for
// u-gentle-badger-68-monday-morning-punchlines-709645dc
//
// Writes one joke about Monday mornings to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The alarm clock filed the complaint; this program just files the joke.
// Node 22+, stdlib only, fully deterministic: the same run always writes
// the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "My alarm clock filed an HR complaint this Monday. Waking me at 6 a.m., it says, is a workplace injury. HR agreed — my Mondays now start at noon.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
