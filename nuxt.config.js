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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        hid: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'preconnect',
        hid: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        hid: 'font-stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;700;900&Work+Sans:wght@100;200;300;400;500;600;700;800;900&Poppins:wght@100;200;300;400;500;600;700;800;900&Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Layout transitions
  layoutTransition: {
    name: 'my-layouts',
    mode: 'out-in',
  },

  // Page transitions
  pageTransition: 'my-page',

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
    // initialColorMode: 'dark',
    extendTheme: {
      fonts: {
        heading: '"Poppins", sans-serif',
        body: '"Plus Jakarta Sans", system-ui, sans-serif',
        mono: 'Menlo, monospace',
        // heading: '"Poppins", sans-serif',
        // body: '"Work Sans", system-ui, sans-serif',
        // font-family: 'Playfair Display', sans-serif;
        // font-family: 'Poppins', sans-serif;
      },
      // Customize your Chakra UI component base
      baseStyles: {
        // color: '#836940',
        CButton: {
          borderRadius: 'sm',
          _focus: { outline: 'none' },
        },
        CDrawerCloseButton: {
          _focus: { outline: 'none' },
        },
        CPopover: {
          zIndex: 10,
          borderRadius: 'sm',
          shadow: 'none',
        },
        CMenu: {
          borderRadius: 'sm',
          shadow: 'none',
        },
        CHeading: {
          color: '#836940',
        },
        CModalOverlay: {
          zIndex: 10,
        },
        CDrawerContent: {
          zIndex: -1,
        },
        // CButton: ({ colorMode }) => ({
        //   bg: colorMode === 'light' ? 'white' : 'whiteAlpha.400',
        //   color: colorMode === 'light' ? 'gray.900' : ''
        // }), //
        // CSelectInput: ({ colorMode }) => ({
        //   bg: colorMode === 'light' ? 'white' : 'whiteAlpha.400',
        //   color: colorMode === 'light' ? 'gray.900' : ''
        // }),
        // CMenu: ({ colorMode }) => ({
        //   bg: colorMode === 'light' ? 'whiteAlpha.400' : 'whiteAlpha.400',
        //   color: colorMode === 'light' ? 'gray.900' : 'whiteAlpha.400'
        // }),
        // CMenuButton: ({ colorMode }) => ({
        //   bg: colorMode === 'light' ? 'white' : 'whiteAlpha.400'
        // }),
        // CBox: ({ colorMode }) => ({
        //   bg: colorMode === 'light' ? '' : '',
        //   color: colorMode === 'light' ? 'gray.900' : ''
        // })
      },
      colors,
      // typography: {
      //   color: '#836940',
      // },
      // typography: {
      // letterSpacings: {
      //   tighter: '-0.05em',
      //   tight: '-0.025em',
      //   normal: '0',
      //   wide: '0.025em',
      //   wider: '0.05em',
      //   widest: '0.1em',
      // },
      // lineHeights: {
      //   normal: 'normal',
      //   none: '1',
      //   shorter: '1.25',
      //   short: '1.375',
      //   base: '1.5',
      //   tall: '1.625',
      //   taller: '2',
      // },
      // fontWeights: {
      //   hairline: 100,
      //   thin: 200,
      //   light: 300,
      //   normal: 400,
      //   medium: 500,
      //   semibold: 600,
      //   bold: 700,
      //   extrabold: 800,
      //   black: 900,
      // },
      // fonts: {
      //   heading:
      //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      //   body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      //   mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      // },
      // fontSizes: {
      //   xs: '0.75rem',
      //   sm: '0.875rem',
      //   md: '1rem',
      //   lg: '1.125rem',
      //   xl: '1.25rem',
      //   '2xl': '1.5rem',
      //   '3xl': '1.875rem',
      //   '4xl': '2.25rem',
      //   '5xl': '3rem',
      //   '6xl': '4rem',
      // },
      // }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Loading color
  loading: { color: '#ff0000' },
}
