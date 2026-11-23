import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve entry.png from the bot directory, not the process working
// directory: the grader runs this program from a different cwd.
const botDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const source = join(botDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(source, join(outDir, "entry.png"));
