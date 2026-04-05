<script setup lang="ts">
import { computed } from "vue";
import { useDriftI18n } from "@/i18n";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  class?: string;
}

const props = withDefaults(defineProps<FormFieldProps>(), {
  required: false,
  error: "",
  class: ""
});

const { t } = useDriftI18n();

const errorText = computed(() => props.error || (props.required ? t("form.required") : ""));
</script>

<template>
  <label
    :class="cn('flex flex-col gap-1 text-sm', props.class)"
  >
    <span class="font-medium text-[rgb(var(--drift-foreground))]">
      {{ label }}
      <span
        v-if="required"
        class="text-[rgb(var(--drift-destructive))]"
      >
        *
      </span>
    </span>
    <slot />
    <span
      v-if="errorText"
      class="text-xs text-[rgb(var(--drift-destructive))]"
    >
      {{ errorText }}
    </span>
  </label>
</template>
