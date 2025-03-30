import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        32: '2rem',
      },
      colors: {
        fg: {
          DEFAULT: 'rgb(var(--color-fg-default) / <alpha-value>)',
          muted: 'rgb(var(--color-fg-muted) / <alpha-value>)',
          accent: 'rgb(var(--color-fg-accent) / <alpha-value>)',
        },
        bg: {
          DEFAULT: 'rgb(var(--color-bg-default) / <alpha-value>)',
          muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border-default) / <alpha-value>)',
        },
      },
    },
  },
} satisfies Config
