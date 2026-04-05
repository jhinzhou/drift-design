import { computed, type InjectionKey, provide, ref, watchEffect } from "vue";
import { darkThemeTokens, lightThemeTokens, type ThemeMode, type ThemeTokens } from "./tokens";

export interface ThemeContext {
  mode: Readonly<{ value: ThemeMode }>;
  tokens: Readonly<{ value: ThemeTokens }>;
  setMode: (mode: ThemeMode) => void;
  setTokens: (tokens: Partial<ThemeTokens>) => void;
}

const themeKey: InjectionKey<ThemeContext> = Symbol("drift-theme");

function applyTokens(tokens: ThemeTokens): void {
  if (typeof document === "undefined") {
    return;
  }

  const target = document.documentElement;
  Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
    target.style.setProperty(`--drift-${tokenName}`, tokenValue);
  });
}

export function createThemeProvider(initialMode: ThemeMode = "light"): ThemeContext {
  const mode = ref<ThemeMode>(initialMode);
  const customTokens = ref<Partial<ThemeTokens>>({});

  const tokens = computed<ThemeTokens>(() => {
    const base = mode.value === "dark" ? darkThemeTokens : lightThemeTokens;
    return { ...base, ...customTokens.value };
  });

  watchEffect(() => {
    applyTokens(tokens.value);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("drift-theme-dark", mode.value === "dark");
    }
  });

  return {
    mode: computed(() => mode.value),
    tokens,
    setMode(nextMode) {
      mode.value = nextMode;
    },
    setTokens(nextTokens) {
      customTokens.value = { ...customTokens.value, ...nextTokens };
    }
  };
}

export function provideTheme(ctx: ThemeContext): void {
  provide(themeKey, ctx);
}

export { themeKey };
