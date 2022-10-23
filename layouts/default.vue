<template>
  <CThemeProvider>
    <CReset />
    <CColorModeProvider>
      <CBox as="main" role="layout" v-bind="mainStyles[colorMode]">
        <MSeoHead />
        <MNavBarDefault :position="navbarPos" @onScrollDown="onScrollDown" />
        <Nuxt />
        <MBackToTop />
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>

<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'

/* Components */
import MSeoHead from '@/components/SeoHead'
import MNavBarDefault from '@/components/navbar/MDefault'
import MBackToTop from '@/components/BackToTop'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    /* Main components */
    MSeoHead,
    MNavBarDefault,
    MBackToTop,
  },
  data() {
    return {
      mainStyles: {
        light: {
          bg: 'tranparent',
          color: 'gray.900',
          // h: ['100%', '100vh'],
        },
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
          // h: ['100%', '100vh'],
        },
        // width: ['xl'],
      },
      navbarPos: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class:
          this.chakraColorMode !== 'light' ? 'theme--dark' : 'theme--light',
      },
    }
  },
  computed: {
    colorMode() {
      return this.chakraColorMode
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScrollDown)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScrollDown)
  },
  methods: {
    onScrollDown() {
      const calcScroll = window.scrollY > 140
      this.navbarPos = calcScroll ? 'sticky' : 'static'
    },
  },
}
</script>
