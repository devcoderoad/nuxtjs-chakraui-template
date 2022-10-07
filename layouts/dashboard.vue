<template>
  <CThemeProvider>
    <CReset />
    <CColorModeProvider>
      <CBox
        font-family="body"
        as="main"
        minH="100vh"
        role="dashboard"
        v-bind="mainStylesContent[mode]"
      >
        <MSeoHead />
        <MDashboard :heading="heading" />
        <!-- <MDrawer isOpen isRelative /> -->
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
import MSeoHead from '~/components/SeoHead'
import MDashboard from '~/components/navbar/MDashboard'
// import MDrawer from '~/components/drawer/MDrawer'

export default {
  name: 'DashboardLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    MSeoHead,
    MDashboard,
    // MDrawer,
  },
  data() {
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
          bgRepeat: 'repeat-x',
          bgSize: 'contain',
        },
        light: {
          bg: 'tranparent',
          color: 'gray.900',
          bgImage: "url('/svg/wave-triple.svg')",
          bgPos: 'bottom',
          bgRepeat: 'repeat-x',
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
  // created() {
  // this.chakraColorMode = 'dark'
  // },
  methods: {
    toggleDrawer() {
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
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
