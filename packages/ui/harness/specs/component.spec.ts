import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

describe("component gate", () => {
  it("contains baseline components", () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const baseDir = resolve(currentDir, "../../src/components");
    expect(existsSync(resolve(baseDir, "button/Button.vue"))).toBe(true);
    expect(existsSync(resolve(baseDir, "input/Input.vue"))).toBe(true);
    expect(existsSync(resolve(baseDir, "dialog/Dialog.vue"))).toBe(true);
  });
});
