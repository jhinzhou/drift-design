import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface ComponentMetaFile {
  components: Array<{ name: string }>;
}

const currentDir = dirname(fileURLToPath(import.meta.url));
const metaPath = resolve(currentDir, "../component-meta.json");
const content = readFileSync(metaPath, "utf8");
const parsed = JSON.parse(content) as ComponentMetaFile;

const requiredComponents = ["Button", "Input", "Dialog", "FormField", "Card"];
const actualNames = parsed.components.map((component) => component.name);

const missing = requiredComponents.filter((name) => !actualNames.includes(name));

if (missing.length > 0) {
  console.error(`component-meta.json missing components: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Meta check passed.");
