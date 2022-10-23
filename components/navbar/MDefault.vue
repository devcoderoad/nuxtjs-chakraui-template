<template>
  <!-- <CFlex bg="linear-gradient(to bottom, rgb(201 201 201 / 45%), rgba(50, 55, 59, 0)) !important;" -->
  <CFlex
    as="nav"
    alignItems="center"
    justify="center"
    mx="auto"
    bgColor="rgba(255, 255, 255, 0.65)"
    backdropFilter="saturate(180%) blur(12px)"
    shadow="lg"
    p="4"
    zIndex="10"
    v-bind="{
      pos: position,
      top: '0',
      left: '0',
      right: '0',
      transition: 'all .5s ease',
    }"
    @scroll="$emit('onScrollDown')"
  >
    <CFlex
      :w="{
        base: 'var(--sizes-containers-lg)',
        sm: 'var(--sizes-containers-xl)',
        lg: 'var(--sizes-containers-xl)',
      }"
      justify="center"
      mx="auto"
    >
      <CLink href="/" mr="auto" :_focus="{ outline: 'none' }">
        <CImage :src="logo" h="34px" alt="Logo" mx="auto" mt="1" />
      </CLink>
      <CFlex
        v-chakra="{
          a: {
            pos: 'relative',
            // d: 'block',
            transition: 'all .25s ease',
            color: 'var(--colors-primary)',
            fontWeight: 'bold',
            // fontSize: ['.77rem', '.88rem'],
            _before: {
              transition: 'all .25s ease',
              content: '\' \'',
              // position: 'absolute',
              // borderBottom: 0,
              // borderColor: 'blackAlpha.500',
              // bottom: 2,
              // right: 0,
              // height: 0,
              // width: '28px',
              // borderBottom: '1px',
            },
            _hover: {
              textDecoration: 'none',
              color: 'blackAlpha.500',
              _before: {
                width: 'full',
                height: '2px',
                borderBottom: '2px',
              },
            },
          },
        }"
        :display="['none', 'flex']"
        alignItems="center"
        as="nav"
      >
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          About
        </CLink>
        <CPopover trigger="hover" placement="top">
          <CPopoverTrigger>
            <CLink
              text-decoration="none"
              :textAlign="[{ base: 'center', md: 'left' }]"
              :mx="[2, 3, 6]"
            >
              Product
            </CLink>
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
                <CText mt="3" fontWeight="bold">Coffee Lattes</CText>
                <CText mt="3" fontWeight="bold">Green Coffee</CText>
                <CText mt="3" fontWeight="bold">Coffee Bean</CText>
                <CText mt="3" fontWeight="bold">Java Coffee</CText>
                <CText mt="3" fontWeight="bold">Robusta Coffee</CText>
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
        <MDrawer
          :isOpen="isDrawerOpen"
          :onOpen="onMobileOpen"
          keyProp="navigation-default"
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
import MDrawer from '@/components/drawer/MDrawer.vue'

import logo from '@/static/logo.svg'

export default {
  name: 'MDefault',
  components: {
    CFlex,
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
  props: {
    position: {
      type: String,
      default: 'static',
    },
  },
  data() {
    return { logo, onMobileOpen: false, isDrawerOpen: false }
  },
  methods: {
    toggleDrawer() {
      const vm = this
      return (vm.isDrawerOpen = !vm.isDrawerOpen)
    },
  },
}
</script>
