---
aiKeywords:
  - ai-snippet
  - best-practice
componentRefs:
  - Button
  - Dialog
useCases:
  - agent-coding
---

# AI Snippets

::: ai-snippet
推荐模式：所有颜色都使用语义 token，不在组件中硬编码品牌色。
:::

::: ai-snippet
推荐模式：若组件带有文案，必须走 i18n key，并保证 `zh-CN` / `en-US` 双语可用。
:::

::: ai-snippet
反模式：直接改写组件库全局样式或绕过 Theme Provider 做局部覆盖。
:::
