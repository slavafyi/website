import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        32: "2rem",
      },
    },
  },
} satisfies Config;
