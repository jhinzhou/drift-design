import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type Dict = Record<string, string>;

const currentDir = dirname(fileURLToPath(import.meta.url));
const zh = JSON.parse(readFileSync(resolve(currentDir, "../src/i18n/locales/zh-CN.json"), "utf8")) as Dict;
const en = JSON.parse(readFileSync(resolve(currentDir, "../src/i18n/locales/en-US.json"), "utf8")) as Dict;

const zhKeys = Object.keys(zh);
const enKeys = Object.keys(en);
const missingInEn = zhKeys.filter((key) => !enKeys.includes(key));
const missingInZh = enKeys.filter((key) => !zhKeys.includes(key));

if (missingInEn.length > 0 || missingInZh.length > 0) {
  console.error(
    `I18n key mismatch. missingInEn=[${missingInEn.join(", ")}], missingInZh=[${missingInZh.join(", ")}]`
  );
  process.exit(1);
}

console.log("I18n check passed.");
