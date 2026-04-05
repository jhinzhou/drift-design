import { describe, expect, it } from "vitest";
import { darkThemeTokens, lightThemeTokens } from "@/theme/tokens";

describe("theme gate", () => {
  it("has required semantic tokens in both themes", () => {
    const keys = Object.keys(lightThemeTokens);
    keys.forEach((key) => {
      expect(lightThemeTokens[key as keyof typeof lightThemeTokens]).toBeTruthy();
      expect(darkThemeTokens[key as keyof typeof darkThemeTokens]).toBeTruthy();
    });
  });
});
