import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxt/typescript-build'],
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css',
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',
    '@gouvminint/vue-dsfr/styles',
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
  srcDir: 'client/',
})
