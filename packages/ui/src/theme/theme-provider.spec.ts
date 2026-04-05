import { describe, expect, it } from "vitest";
import { createThemeProvider } from "./theme-provider";

describe("theme provider", () => {
  it("updates mode and merges custom tokens", () => {
    const theme = createThemeProvider("light");
    expect(theme.mode.value).toBe("light");
    theme.setMode("dark");
    theme.setTokens({ primary: "10 10 10" });
    expect(theme.mode.value).toBe("dark");
    expect(theme.tokens.value.primary).toBe("10 10 10");
  });
});
