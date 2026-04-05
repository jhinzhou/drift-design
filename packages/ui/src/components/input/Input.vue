<script setup lang="ts">
import { computed } from "vue";
import { useDriftI18n } from "@/i18n";
import { cn } from "@/lib/utils";

interface InputProps {
  modelValue?: string;
  placeholder?: string;
  class?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
  placeholder: "",
  class: "",
  disabled: false
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const { t } = useDriftI18n();

const resolvedPlaceholder = computed(() => props.placeholder || t("input.placeholder"));

const classes = computed(() =>
  cn(
    "flex h-10 w-full rounded-md border border-[rgb(var(--drift-border))] bg-[rgb(var(--drift-background))] px-3 py-2 text-sm text-[rgb(var(--drift-foreground))] focus-visible:outline-none",
    props.class
  )
);

function onInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="resolvedPlaceholder"
    :disabled="disabled"
    :class="classes"
    @input="onInput"
  >
</template>
