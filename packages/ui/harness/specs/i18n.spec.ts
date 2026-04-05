import { describe, expect, it } from "vitest";
import enUS from "@/i18n/locales/en-US.json";
import zhCN from "@/i18n/locales/zh-CN.json";

describe("i18n gate", () => {
  it("ensures base message keys exist in zh/en", () => {
    const zhMessages = zhCN as Record<string, string>;
    const enMessages = enUS as Record<string, string>;
    const keys = Object.keys(zhMessages);
    expect(keys.length).toBeGreaterThan(0);
    keys.forEach((key) => {
      expect(zhMessages[key]).toBeTruthy();
      expect(enMessages[key]).toBeTruthy();
    });
  });
});
