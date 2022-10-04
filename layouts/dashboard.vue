<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main" minH="100vh" role="dashboard">
          <CReset />
          <MDrawer
            :cIsDrawerOpen="isDrawerOpen"
            :onOpen="onMobileOpen"
            @toggleDrawer="toggleDrawer"
          />
          <CBox
            border-bottom-width="1px"
            border-bottom-color="gray"
            background-color="transparent"
          >
            <CFlex
              :ml="{ base: 0, md: 60 }"
              :px="{ base: 4, md: 4 }"
              height="20"
              align-items="center"
              :justify-content="{ base: 'space-between', md: 'flex-end' }"
            >
              <CIconButton
                display="{ base: 'flex', md: 'none' }"
                variant="outline"
                aria-label="Menu"
                variant-color="green"
                icon="bars"
                @click="toggleDrawer"
              >
              </CIconButton>
              <CStack :spacing="{ base: '0', md: '6' }">
                <CFlex align-items="center">
                  <CMenu>
                    <CMenuButton
                      transition="all 0.3s"
                      :focus="{ boxShadow: 'none' }"
                      p="0"
                    >
                      <CAvatar
                        size="xs"
                        m="1"
                        src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      />
                    </CMenuButton>
                    <CMenuList>
                      <CMenuItem key="profile">Profile</CMenuItem>
                      <CMenuItem key="settings">Settings</CMenuItem>
                      <CMenuItem key="billing">Billing</CMenuItem>
                      <CMenuDivider />
                      <CMenuItem key="signout">Sign out</CMenuItem>
                    </CMenuList>
                  </CMenu>
                </CFlex>
              </CStack>
            </CFlex>
          </CBox>
          <CBox :ml="{ base: 0, md: 60 }" p="4">
            <Nuxt />
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CFlex,
  // CButton,
  CIconButton,
  CMenu,
  CMenuList,
  CMenuItem,
  CMenuDivider,
  CMenuButton,
  CAvatar,
  CStack,
} from '@chakra-ui/vue'

/* Components */
import MDrawer from '@/components/drawer/MDrawer'

export default {
  name: 'DashboardLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex,
    CStack,
    CMenu,
    CMenuList,
    CMenuItem,
    CMenuDivider,
    CMenuButton,
    // CButton,
    CIconButton,
    CAvatar,
    /* Components */
    MDrawer,
  },
  // inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    // console.log(this.thistest)
    // console.log(this.isDrawerOpen)
    return {
      isDrawerOpen: false,
      onMobileOpen: false,
      thistest: '',
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
    }
  },
  // computed: {
  //   colorMode() {
  //     const vm = this
  //     // return vm.$chakraColorMode
  //   },
  //   theme() {
  //     const vm = this
  //     // return vm.$chakraTheme()
  //   },
  //   toggleColorMode() {
  //     const vm = this
  //     // return vm.$toggleColorMode()
  //   },
  // },
  methods: {
    // onClose() {
    //   return this.$emit('enlarge-text')
    // },
    // onDrawer() {
    //   const vm = this
    //   return console.log(vm.isDrawerOpen)
    // },
    toggleDrawer() {
      // console.log(this.isDrawerOpen)
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
    // onMobileOpen() {
    //   return console.log(this.isDrawerOpen)
    // },
  },
}
</script>
