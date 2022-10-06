import * as icons from './utils/icons'
import colors from './utils/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-chakraui-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: ['author.name'],
    // Only search in title
    fullTextSearchFields: ['title'],
  },

  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: {
    icons: {
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: 'fa',
      iconSet: icons,
    },
    extendTheme: {
      /* Customize your Chakra UI component base */
      baseStyles: {
        CButton: {
          borderRadius: 'sm',
          _focus: { outline: 'none' },
        },
        CDrawerCloseButton: {
          _focus: { outline: 'none' },
        },
        CPopper: {
          borderRadius: 'sm',
          shadow: 'none',
        },
        CMenu: {
          borderRadius: 'sm',
          shadow: 'none',
        },
      },
      colors,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
