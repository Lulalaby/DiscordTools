require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DiscordTools',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Server Middleware
  serverMiddleware: {
    '/': '~/api',
  },

  server: {
    port: process.env.PORT, // default: 3000
    host: '0.0.0.0',
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Loader
  loading: {
    color: '#5865F2',
    height: '2px',
  },

  // Font Awesome
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Google Fonts
  /*
  googleFonts: {
    families: {
      Rubik: [100,200,300,400,500,600,700,800,900,1000],
      Poppins: [100,200,300,400,500,600,700,800,900,1000],
    }
  },*/

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    ['nuxt-tailvue', { toast: true }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['~/assets/js/outline.js'],
  },

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
}