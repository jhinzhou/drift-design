# Prompt Examples

## Basic: New Component

```
Task: Add Badge component.
Allowed files: packages/ui/src/components/badge/*, packages/ui/src/index.ts, tests/docs/meta related files.
Constraints: semantic token only, no brand color literals.
I18n: if built-in text exists, add zh-CN/en-US keys.
Theme: support light/dark token variables.
Output: component + tests + docs + metadata + gate results.
```

## Pattern: Modify Existing Component

```
Task: Add loading state to Button.
Allowed files: button component, button tests, docs button page, metadata.
Constraints: preserve existing API compatibility.
Output: patch summary + validation results + known risks.
```

## Anti-pattern

```
Do not rewrite unrelated components or global styles.
Do not skip tests/docs/meta updates.
Do not bypass harness validation.
```
