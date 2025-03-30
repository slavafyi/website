import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import redirects from './data/redirects.json'
import deno from '@deno/astro-adapter'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://slava.fyi',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: redirects.reduce((acc, curr) => {
    acc[curr.source] = {
      status: curr.status,
      destination: curr.destination
    }
    return acc
  }, {}),
  output: 'static',
  adapter: deno(),
  trailingSlash: false
})
