<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { computed } from "vue";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[rgb(var(--drift-primary))] text-[rgb(var(--drift-primary-foreground))] hover:opacity-90",
        secondary:
          "bg-[rgb(var(--drift-secondary))] text-[rgb(var(--drift-secondary-foreground))] hover:opacity-90",
        destructive:
          "bg-[rgb(var(--drift-destructive))] text-white hover:opacity-90 border border-transparent"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
  class: ""
});

const classes = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size }), props.class));
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>
