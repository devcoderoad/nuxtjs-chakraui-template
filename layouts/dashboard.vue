<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox
        font-family="body"
        as="main"
        minH="100vh"
        role="dashboard"
        v-bind="mainStylesContent[mode]"
      >
        <CReset />
        <MDashboard :heading="heading" />
        <CBox :ml="{ base: 0, md: 60 }" p="4">
          <Nuxt />
        </CBox>
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
import MDashboard from '~/components/navbar/MDashboard.vue'

export default {
  name: 'DashboardLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    MDashboard,
  },
  data() {
    // console.log(this)
    return {
      isDrawerOpen: false,
      onMobileOpen: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'tranparent',
          color: 'gray.900',
        },
      },
      mainStylesContent: {
        dark: {
          bg: 'gray.800',
          color: 'whiteAlpha.900',
          bgImage: "url('/svg/wave-triple-dark.svg')",
          bgPos: 'bottom',
          bgRepeat: 'no-repeat',
          bgSize: 'contain',
        },
        light: {
          bg: 'tranparent',
          color: 'gray.900',
          bgImage: "url('/svg/wave-triple.svg')",
          bgPos: 'bottom',
          bgRepeat: 'no-repeat',
          bgSize: 'contain',
        },
      },
      heading: 'Dashboard',
    }
  },
  computed: {
    mode() {
      return this.chakraColorMode
    },
  },
  methods: {
    toggleDrawer() {
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
  },
}
</script>
