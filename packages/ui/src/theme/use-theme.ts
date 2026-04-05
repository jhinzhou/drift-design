import { inject } from "vue";
import { themeKey } from "./theme-provider";

export function useTheme() {
  const ctx = inject(themeKey);
  if (!ctx) {
    throw new Error("useTheme must be used after provideTheme/createThemeProvider.");
  }
  return ctx;
}
