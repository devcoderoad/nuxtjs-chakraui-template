<template>
  <CFlex
    alignItems="center"
    justify="center"
    mx="auto"
    border-color="gray.400"
    bgColor="transparent"
    bg="linear-gradient(to bottom, rgb(201 201 201 / 45%), rgba(50, 55, 59, 0)) !important;"
    p="3"
    pos="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="3"
    @scroll="onScroll"
  >
    <CFlex
      :w="{
        md: 'var(--sizes-containers-sm)',
        xl: 'var(--sizes-containers-xl)',
      }"
      flex="wrap"
      :display="{ base: 'flex' }"
      mx="auto"
      justify="center"
    >
      <CIconButton
        :onClick="onToggle"
        icon="bars"
        isOpen
        variant="ghost"
        ariaLabel="Open"
        bgColor="blackAlpha.100"
        :d="['block', 'none']"
      />
      <CImage :src="logo" h="34px" alt="Logo" mr="auto" ml="6" mt="1" />
      <CFlex
        v-chakra="{
          a: {
            pos: 'relative',
            d: 'block',
            transition: 'all .25s ease',
            color: 'var(--colors-primary)',
            textShadow: '1px 1px var(--colors--white)',
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
        isInline
        mt="0"
        as="nav"
        :fontSize="['1rem', '1.15rem']"
        fontWeight="bold"
      >
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          :mx="[2, 3, 6]"
        >
          About
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          :mx="[2, 3, 6]"
        >
          Product
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          :mx="[2, 3, 6]"
        >
          Merch
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          :mx="[2, 3, 6]"
        >
          Contact
        </CLink>
      </CFlex>
      <CFlex :display="{ base: 'none', md: 'flex' }" ml="10">
        <!-- <DesktopNav /> -->
        Desktop Nav
      </CFlex>
    </CFlex>
  </CFlex>
</template>
<script>
import {
  CFlex,
  CImage,
  CIconButton,
  // CText,
  CLink /* , CIcon */,
} from '@chakra-ui/vue'
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'
import logo from '@/static/logo.svg'

export default {
  name: 'MDefault',
  components: { CFlex, CImage, CIconButton, CLink /* CText, */ /* , CIcon */ },
  props: {},
  data() {
    return { logo }
  },
  methods: {
    onToggle() {},
    onScroll(e) {
      return console.log(e)
    },
  },
}
</script>
