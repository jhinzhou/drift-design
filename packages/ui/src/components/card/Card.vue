<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface CardProps {
  class?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  class: ""
});

const classes = computed(() =>
  cn(
    "rounded-lg border border-[rgb(var(--drift-border))] bg-[rgb(var(--drift-background))] text-[rgb(var(--drift-foreground))] shadow-sm",
    props.class
  )
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
