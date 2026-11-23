import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

if (!existsSync("entry.png")) {
  throw new Error("entry.png is missing from the repository");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync("entry.png", join(outDir, "entry.png"));
