<template>
  <CFlex
    alignItems="center"
    justify="center"
    mx="auto"
    bgColor="transparent"
    bg="linear-gradient(to bottom, rgb(201 201 201 / 45%), rgba(50, 55, 59, 0)) !important;"
    p="3"
    height="76"
    pos="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="3"
    @scroll="onScroll"
  >
    <CFlex
      :w="{
        sm: 'var(--sizes-containers-xl)',
        lg: 'var(--sizes-containers-xl)',
      }"
      flex="wrap"
      :display="{ base: 'flex' }"
      mx="auto"
      justify="center"
    >
      <CImage :src="logo" h="34px" alt="Logo" mr="auto" ml="6" mt="1" />
      <CFlex
        v-chakra="{
          a: {
            pos: 'relative',
            d: 'block',
            transition: 'all .25s ease',
            color: 'var(--colors-primary)',
            fontWeight: 'bold',
            fontSize: ['.77rem', '.88rem'],
            _before: {
              transition: 'all .25s ease',
              content: '\' \'',
              position: 'absolute',
              borderBottom: 0,
              borderColor: 'blackAlpha.500',
              bottom: 2,
              right: 0,
              height: 0,
              width: '28px',
              borderBottom: '1px',
            },
            _hover: {
              textDecoration: 'none',
              color: 'blackAlpha.600',
              _before: {
                width: 'full',
                height: '2px',
                borderBottom: '2px',
              },
            },
          },
        }"
        mt="0"
        as="nav"
        :display="['none', 'flex']"
      >
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          About
        </CLink>
        <CPopover trigger="hover">
          <CPopoverTrigger>
            <c-link
              text-decoration="none"
              font-weight="bold"
              color="blue.500"
              :textAlign="[{ base: 'center', md: 'left' }]"
              :mx="[2, 3, 6]"
            >
              Product
            </c-link>
          </CPopoverTrigger>
          <CLightMode>
            <CPopoverContent
              shadow="2xl"
              zIndex="4"
              width="400px"
              color="primary"
              rounded="lg"
              :_focus="{ outline: 'none' }"
            >
              <CPopoverArrow />
              <CBox p="5">
                <CText mt="2" fontWeight="bold">
                  swyx
                  <c-badge ml="3" variant="solid" font-size="xs">
                    Follows you
                  </c-badge>
                </CText>
                <CText mt="3">
                  Infinite Builder working on DX @Netlify. Helping people
                  #LearnInPublic
                </CText>
              </CBox>
            </CPopoverContent>
          </CLightMode>
        </CPopover>
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          Merch
        </CLink>
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          Contact
        </CLink>
      </CFlex>
      <CFlex :display="['block', 'none']">
        <!-- <CDrawer
          :auto-focus="false"
          :isOpen="isOpenDrawer"
          :onOverlayClick="isOpenDrawer"
          :initialFocusRef="() => $refs.inputInsideModal"
          placement="left"
          zIndex="111111"
        >
          <CDrawerOverlay />
          <CDrawerContent zIndex="111111">
            <CDrawerCloseButton />

            <CDrawerHeader>
              <CHeading>Navigation</CHeading>
            </CDrawerHeader>

            <CDrawerBody>
              <CFlex is-inline>
                <Ctext>Menu One</Ctext>
                <Ctext>Menu One</Ctext>
                <Ctext>Menu One</Ctext>
                <Ctext>Menu One</Ctext>
                <Ctext>Menu One</Ctext>
              </CFlex>
            </CDrawerBody>

            <CDrawerFooter>
              <CText size="md" color="primary">Copyright 2002</CText>
            </CDrawerFooter>
          </CDrawerContent>
        </CDrawer> -->
        <MDrawer
          :isOpen="isDrawerOpen"
          :onOpen="onMobileOpen"
          @toggleDrawer="toggleDrawer"
        />
      </CFlex>
      <CIconButton
        icon="bars"
        variant="ghost"
        ariaLabel="Open"
        bgColor="blackAlpha.100"
        :d="['block', 'none']"
        @click="toggleDrawer"
      />
    </CFlex>
  </CFlex>
</template>
<script>
import {
  CFlex,
  // CDrawer,
  // CDrawerBody,
  // CDrawerFooter,
  // CDrawerHeader,
  // CDrawerOverlay,
  // CDrawerContent,
  // CDrawerCloseButton,
  CPopover,
  CPopoverTrigger,
  CPopoverContent,
  CPopoverArrow,
  CImage,
  CIconButton,
  CText,
  CLink,
  CLightMode,
} from '@chakra-ui/vue'

/* Main Components */
import MDrawer from '../drawer/MDrawer.vue'

import logo from '@/static/logo.svg'

export default {
  name: 'MDefault',
  components: {
    CFlex,
    // CDrawer,
    // CDrawerBody,
    // CDrawerFooter,
    // CDrawerHeader,
    // CDrawerOverlay,
    // CDrawerContent,
    // CDrawerCloseButton,
    CPopover,
    CPopoverTrigger,
    CPopoverContent,
    CPopoverArrow,
    CImage,
    CIconButton,
    CLink,
    CText,
    CLightMode,
    MDrawer,
  },
  props: {},
  data() {
    return { logo, onMobileOpen: false, isDrawerOpen: false }
  },
  methods: {
    toggleDrawer() {
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
    // onToggle() {
    //   return (this.isOpenDrawer = !this.isOpenDrawer)
    // },
    onScroll(e) {
      return console.log(e)
    },
  },
}
</script>
