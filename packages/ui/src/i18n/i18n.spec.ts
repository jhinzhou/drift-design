import { describe, expect, it } from "vitest";
import { createDriftI18n } from "./index";

describe("i18n", () => {
  it("uses locale messages and fallback", () => {
    const i18n = createDriftI18n({ locale: "zh-CN" });
    expect(i18n.t("dialog.close")).toBe("关闭");
    i18n.setLocale("en-US");
    expect(i18n.t("dialog.close")).toBe("Close");
    expect(i18n.t("missing.key", "fallback")).toBe("fallback");
  });
});
