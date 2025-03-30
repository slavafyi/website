import { configs } from '@slavamak/eslint-config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  configs.ignore,
  configs.base,
  configs.node,
  configs.typescript,
]
