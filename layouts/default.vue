<template>
  <CThemeProvider>
    <CReset />
    <CColorModeProvider>
      <CBox v-bind="mainStyles[colorMode]">
        <MSeoHead />
        <MNavBarDefault />
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

/* Components */
import MSeoHead from '@/components/SeoHead'
import MNavBarDefault from '@/components/navbar/MDefault'

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
