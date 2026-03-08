import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import redirects from './data/redirects.json' with { type: 'json' }

export default defineConfig({
  adapter: cloudflare(),
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
