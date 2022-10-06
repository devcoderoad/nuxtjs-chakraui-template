<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox font-family="body" as="main">
        <CReset />
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
