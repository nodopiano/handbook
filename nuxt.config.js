import theme from '@nuxt/content-theme-docs'

export default theme({ server: {
    host: '0' // default: localhost
  },
  components: [
    '~/components', // default level is 0
	{ path: '~/node_modules/@nuxt/content-theme-docs/src/components/', level: 1 }
  ],
  docs: {
    primaryColor: '#E24F55'
  },
  buildModules: [
         '@nuxtjs/google-fonts'
       ],
  googleFonts: {
     families: {
         rubik: true,
     },
  }
})
