import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

describe("meta gate", () => {
  it("has component metadata files", () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    expect(existsSync(resolve(currentDir, "../../component-meta.json"))).toBe(true);
    expect(existsSync(resolve(currentDir, "../../vscode-custom-data.json"))).toBe(true);
  });
});
