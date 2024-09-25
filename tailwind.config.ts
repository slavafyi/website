import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        32: "2rem",
      },
      colors: {
        fg: {
          DEFAULT: "rgb(var(--color-fg-default) / <alpha-value>)",
          muted: "rgb(var(--color-fg-muted) / <alpha-value>)",
          accent: "rgb(var(--color-fg-accent) / <alpha-value>)",
        },
        bg: {
          DEFAULT: "rgb(var(--color-bg-default) / <alpha-value>)",
          muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--color-border-default) / <alpha-value>)",
        },
      },
    },
  },
} satisfies Config;
