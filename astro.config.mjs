import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import redirects from './data/redirects.json'

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: 'https://slava.fyi',
  redirects: redirects.reduce((acc, curr) => {
    acc[curr.source] = {
      status: curr.status,
      destination: curr.destination,
    }
    return acc
  }, {}),
  vite: {
    plugins: [tailwindcss()],
  },
})
