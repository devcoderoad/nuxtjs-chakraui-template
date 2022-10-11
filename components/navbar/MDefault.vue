<template>
  <CFlex
    alignItems="center"
    justify="center"
    mx="auto"
    border-color="gray.400"
    color="gray.600"
    bgColor="transparent"
    p="3"
    :w="{ base: 'full', md: '70%' }"
    pos="fixed"
    zIndex="1"
    @scroll="onScroll"
  >
    <CFlex
      width="full"
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
          color="gray.800"
          :mx="[2, 3, 6]"
        >
          About
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          color="gray.800"
          :mx="[2, 3, 6]"
        >
          Product
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          color="gray.800"
          :mx="[2, 3, 6]"
        >
          Merch
        </CLink>
        <CLink
          :textAlign="[{ base: 'center', md: 'left' }]"
          fontFamily="heading"
          color="gray.800"
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
