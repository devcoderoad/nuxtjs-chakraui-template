<template>
  <CThemeProvider>
    <CReset />
    <CColorModeProvider>
      <CBox font-family="body" as="main">
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
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
