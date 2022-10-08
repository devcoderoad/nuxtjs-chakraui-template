<template>
  <CThemeProvider>
    <CReset />
    <CColorModeProvider>
      <CBox v-bind="mainStyles[colorMode]">
        <MSeoHead />
        <Nuxt />
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

import MSeoHead from '@/components/SeoHead'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    MSeoHead,
  },
  data() {
    return {
      mainStyles: {
        light: {
          bg: 'tranparent',
          color: 'gray.900',
          h: ['100%', '100vh'],
        },
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
          h: ['100%', '100vh'],
        },
      },
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
}
</script>
