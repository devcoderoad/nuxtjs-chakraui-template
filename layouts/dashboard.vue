<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main" minH="100vh" role="dashboard">
          <CReset />
          <CDrawer
            :autoFocus="false"
            :isOpen="isDrawerOpen"
            :onClose="onClose"
            :returnFocusOnClose="false"
            :onOverlayClick="isDrawerOpen"
            placement="left"
          >
            <CDrawerContent>
              <CBox
                transition="3s ease"
                borderRight="1px"
                pos="fixed"
                h="full"
                :w="{ base: 'full' }"
              >
                <CFlex
                  h="100vh"
                  w="100%"
                  alignItems="center"
                  mx="8"
                  justifyContent="space-between"
                >
                  <CStack :spacing="5">
                    <CBox :p="5" shadow="md" border-width="1px">
                      <CText>Vue makes front-end development a breeze.</CText>
                    </CBox>
                    <CBox :p="5" shadow="md" border-width="1px">
                      <CText>Nuxt makes writing Vue even easier.</CText>
                    </CBox>
                    <CBox :p="5" shadow="md" border-width="1px">
                      <CText>Nuxt makes writing Vue even easier.</CText>
                    </CBox>
                    <CBox :p="5" shadow="md" border-width="1px">
                      <CText>Nuxt makes writing Vue even easier.</CText>
                    </CBox>
                    <CBox :p="5" shadow="md" border-width="1px">
                      <CText>Nuxt makes writing Vue even easier.</CText>
                    </CBox>
                  </CStack>
                  <CDrawerCloseButton @click="toggleDrawer" />
                </CFlex>
              </CBox>
            </CDrawerContent>
          </CDrawer>
          <CBox :onOpen="onMobileOpen">
            <CFlex
              :ml="{ base: 0, md: 60 }"
              :px="{ base: 4, md: 4 }"
              height="20"
              align-items="center"
              border-bottom-width="1px"
              border-bottom-color="red"
              :justify-content="{ base: 'space-between', md: 'flex-end' }"
            >
              <CButton
                display="{ base: 'flex', md: 'none' }"
                variant="outline"
                aria-label="open menu"
                variant-color="blue"
                icon="search"
                @click="toggleDrawer"
              >
                :
              </CButton>
              <CStack :spacing="{ base: '0', md: '6' }">
                <CFlex align-items="center">
                  <CMenu>
                    <CMenuButton
                      transition="all 0.3s"
                      :focus="{ boxShadow: 'none' }"
                      p="2"
                    >
                      <CAvatar
                        size="sm"
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
  CDrawer,
  CDrawerContent,
  CButton,
  CMenu,
  CMenuList,
  CMenuItem,
  CMenuDivider,
  CMenuButton,
  CAvatar,
  CStack,
} from '@chakra-ui/vue'

export default {
  name: 'DashboardLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex,
    CDrawer,
    CDrawerContent,
    CStack,
    CMenu,
    CMenuList,
    CMenuItem,
    CMenuDivider,
    CMenuButton,
    CButton,
    CAvatar,
  },
  // inject: ['$chakraColorMode', '$toggleColorMode'],
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
    onClose() {
      return console.log(this.isDrawerOpen)
    },
    onDrawer() {
      const vm = this
      return console.log(vm.isDrawerOpen)
    },
    toggleDrawer() {
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
    // onMobileOpen() {
    //   return console.log(this.isDrawerOpen)
    // },
  },
}
</script>
