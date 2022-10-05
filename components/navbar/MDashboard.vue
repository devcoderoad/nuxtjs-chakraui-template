<template>
  <CBox background-color="gray.100" v-bind="mainStyles[colorMode]">
    <MDrawer
      :cIsDrawerOpen="isDrawerOpen"
      :onOpen="onMobileOpen"
      @toggleDrawer="toggleDrawer"
    />
    <CBox>
      <CFlex
        :ml="{ base: 0, md: 60 }"
        :px="{ base: 4, md: 4 }"
        height="16"
        align-items="center"
        :justify-content="{ base: 'space-between', md: 'flex-end' }"
      >
        <CFlex
          align-items="center"
          :justify-content="{ base: 'space-between', md: 'flex-end' }"
        >
          <CIconButton
            display="{ base: 'flex', md: 'none' }"
            aria-label="Menu"
            icon="bars"
            @click="toggleDrawer"
          >
          </CIconButton>
          <CHeading size="sm" mx="2">{{ heading }}</CHeading>
        </CFlex>
        <CStack :spacing="{ base: '0', md: '6' }">
          <CFlex align-items="center">
            <CIconButton
              mr="2"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              :aria-label="`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`"
              @click="toggleColorMode"
            />
            <CIconButton
              transition="all 0.3s"
              :focus="{ boxShadow: 'none' }"
              aria-label="Back to Home"
              p="0"
              mr="2"
              as="a"
              href="/"
              icon="house"
            />
            <CMenu>
              <CMenuButton
                transition="all 0.3s"
                :focus="{ boxShadow: 'none' }"
                p="0"
              >
                <CAvatar
                  size="xs"
                  m="1"
                  borderWidth="1"
                  src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
              </CMenuButton>
              <CMenuList
                borderColor="transparent"
                v-bind="mainStylesMenu[colorMode]"
              >
                <CMenuItem key="profile" as="a" href="/dashboard/profile"
                  >Profile</CMenuItem
                >
                <CMenuItem key="settings" as="a" href="/dashboard/setting"
                  >Settings</CMenuItem
                >
                <CMenuItem key="billing" as="a" href="/dashboard/billing"
                  >Billing</CMenuItem
                >
                <CMenuDivider />
                <CMenuItem key="signout">Sign out</CMenuItem>
              </CMenuList>
            </CMenu>
          </CFlex>
        </CStack>
      </CFlex>
    </CBox>
  </CBox>
</template>

<script>
/* Chakra UI */
import {
  CBox,
  CFlex,
  CIconButton,
  CMenu,
  CMenuList,
  CMenuItem,
  CMenuDivider,
  CMenuButton,
  CAvatar,
  CStack,
} from '@chakra-ui/vue'

/* Main Components */
import MDrawer from '../drawer/MDrawer.vue'

export default {
  name: 'MDashboard',
  components: {
    MDrawer,
    CBox,
    CFlex,
    CIconButton,
    CMenu,
    CMenuList,
    CMenuItem,
    CMenuDivider,
    CMenuButton,
    CAvatar,
    CStack,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  props: {
    heading: {
      type: String,
      default: () => '',
    },
    activeMenu: {
      type: String,
      default: () => '/',
    },
  },
  data() {
    return {
      isDrawerOpen: false,
      onMobileOpen: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
          // bgImage: "url('/svg/wave.svg')",
          // bgPos: 'bottom',
          // bgRepeat: 'no-repeat',
          // bgSize: 'contain',
        },
        light: {
          bg: 'tranparent',
          color: 'gray.900',
          // bgImage: "url('/svg/wave.svg')",
          // bgPos: 'bottom',
          // bgRepeat: 'no-repeat',
          // bgSize: 'contain',
        },
      },
      mainStylesMenu: {
        dark: {
          bgColor: 'gray.600',
          color: 'white',
        },
        light: { bgColor: 'white.100', color: 'gray.900', shadow: 'xl' },
      },
    }
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
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
