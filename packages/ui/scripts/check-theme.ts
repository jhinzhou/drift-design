import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const styleContent = readFileSync(resolve(currentDir, "../src/styles/index.css"), "utf8");
const requiredTokens = [
  "--drift-background",
  "--drift-foreground",
  "--drift-primary",
  "--drift-primary-foreground",
  "--drift-secondary",
  "--drift-secondary-foreground",
  "--drift-success",
  "--drift-warning",
  "--drift-destructive",
  "--drift-border"
];

const missing = requiredTokens.filter((token) => !styleContent.includes(token));

if (missing.length > 0) {
  console.error(`Theme token missing in styles/index.css: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Theme check passed.");
