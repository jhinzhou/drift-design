import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

describe("a11y gate", () => {
  it("dialog has aria-label on close button", () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const dialogFile = readFileSync(resolve(currentDir, "../../src/components/dialog/Dialog.vue"), "utf8");
    expect(dialogFile.includes("aria-label")).toBe(true);
  });
});
