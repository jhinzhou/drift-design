export type ThemeMode = "light" | "dark";

export type ThemeTokenName =
  | "background"
  | "foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "success"
  | "warning"
  | "destructive"
  | "border";

export type ThemeTokens = Record<ThemeTokenName, string>;

export interface ThemePreset {
  name: string;
  mode: ThemeMode;
  tokens: ThemeTokens;
}

export const lightThemeTokens: ThemeTokens = {
  background: "255 255 255",
  foreground: "20 20 20",
  primary: "37 99 235",
  "primary-foreground": "255 255 255",
  secondary: "243 244 246",
  "secondary-foreground": "17 24 39",
  success: "22 163 74",
  warning: "217 119 6",
  destructive: "220 38 38",
  border: "229 231 235"
};

export const darkThemeTokens: ThemeTokens = {
  background: "10 10 10",
  foreground: "245 245 245",
  primary: "59 130 246",
  "primary-foreground": "255 255 255",
  secondary: "39 39 42",
  "secondary-foreground": "244 244 245",
  success: "34 197 94",
  warning: "245 158 11",
  destructive: "239 68 68",
  border: "63 63 70"
};

export const themePresets: Record<string, ThemePreset> = {
  defaultLight: {
    name: "defaultLight",
    mode: "light",
    tokens: lightThemeTokens
  },
  defaultDark: {
    name: "defaultDark",
    mode: "dark",
    tokens: darkThemeTokens
  }
};
