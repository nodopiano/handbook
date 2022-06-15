import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {    classSuffix: ''  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
