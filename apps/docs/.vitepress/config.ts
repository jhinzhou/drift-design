import { defineConfig } from "vitepress";
import markdownItContainer from "markdown-it-container";

export default defineConfig({
  title: "drift-ui",
  description: "AI-ready Vue component library",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Components", link: "/components/button" }
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "AI Snippets", link: "/guide/ai-snippets" }
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Input", link: "/components/input" },
          { text: "Dialog", link: "/components/dialog" }
        ]
      }
    ],
    search: {
      provider: "local"
    }
  },
  markdown: {
    config(md) {
      md.use(markdownItContainer, "ai-snippet");
    }
  }
});
