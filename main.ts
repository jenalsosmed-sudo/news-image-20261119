// News-image entry for Thursday 19 November 2026 (Node 22, standard
// library only): the program copies the finished newspaper front page
// drawn in this repository — entry.png — to the grader's output path.
// The poster sums up the day: the Gulf escalation (Iran's drone strikes
// on US bases in Kuwait and Bahrain), the Trump–Xi–Putin summit in
// Shenzhen, the ICJ's Rohingya genocide ruling, the Kerch Bridge strike
// and Anthropic's record IPO, plus a strip of the day's other headlines.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
if (!existsSync(src)) throw new Error(`missing poster image: ${src}`);
mkdirSync(outDir, { recursive: true });
// A straight byte-for-byte copy, so both grader runs write identical bytes.
copyFileSync(src, join(outDir, 'entry.png'));
