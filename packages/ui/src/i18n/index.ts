import { computed, inject, provide, ref, type InjectionKey, type Ref } from "vue";
import enUS from "./locales/en-US.json";
import zhCN from "./locales/zh-CN.json";

export type DriftLocale = "zh-CN" | "en-US";
export type MessageSchema = Record<string, string>;

export interface DriftI18nContext {
  locale: Ref<DriftLocale>;
  setLocale: (locale: DriftLocale) => void;
  t: (key: string, fallback?: string) => string;
  messages: Ref<Record<DriftLocale, MessageSchema>>;
}

const i18nKey: InjectionKey<DriftI18nContext> = Symbol("drift-i18n");

const builtinMessages: Record<DriftLocale, MessageSchema> = {
  "zh-CN": zhCN,
  "en-US": enUS
};

export interface CreateI18nOptions {
  locale?: DriftLocale;
  messages?: Partial<Record<DriftLocale, MessageSchema>>;
}

export function createDriftI18n(options: CreateI18nOptions = {}): DriftI18nContext {
  const locale = ref<DriftLocale>(options.locale ?? "zh-CN");
  const messages = ref<Record<DriftLocale, MessageSchema>>({
    "zh-CN": { ...builtinMessages["zh-CN"], ...(options.messages?.["zh-CN"] ?? {}) },
    "en-US": { ...builtinMessages["en-US"], ...(options.messages?.["en-US"] ?? {}) }
  });

  const translator = computed(() => {
    return (key: string, fallback?: string) => {
      return messages.value[locale.value][key] ?? messages.value["en-US"][key] ?? fallback ?? key;
    };
  });

  return {
    locale,
    messages,
    setLocale(nextLocale) {
      locale.value = nextLocale;
    },
    t(key, fallback) {
      return translator.value(key, fallback);
    }
  };
}

export function provideDriftI18n(ctx: DriftI18nContext): void {
  provide(i18nKey, ctx);
}

export function useDriftI18n(): DriftI18nContext {
  const ctx = inject(i18nKey);
  if (!ctx) {
    return createDriftI18n();
  }
  return ctx;
}
