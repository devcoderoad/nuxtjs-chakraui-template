<template>
  <CFlex
    alignItems="center"
    justify="center"
    mx="auto"
    borderBottom="1px"
    borderStyle="solid"
    border-color="gray.400"
    color="gray.600"
    bgColor="gray.200"
    :w="{ base: 'full', md: '70%' }"
  >
    <CFlex
      :width="['33%']"
      :flex="{ base: 1, md: 'auto' }"
      :display="{ base: 'flex', md: 'none' }"
      mx="auto"
      justify="center"
    >
      <CIconButton
        :onClick="onToggle"
        icon="house"
        isOpen
        variant="ghost"
        ariaLabel="Open"
      />
      <!-- : <CIcon icon="bars" w="5" h="5" />
        } variant={'ghost'} aria-label={'Toggle Navigation'} /> -->
      <CImage :src="logo" h="40px" alt="Logo" mx="auto" />
    </CFlex>
    <CFlex :flex="{ base: 1 }" :justify="{ base: 'center', md: 'start' }">
      <CText
        :textAlign="[{ base: 'center', md: 'left' }]"
        fontFamily="heading"
        color="gray.800"
      >
        Logo
      </CText>
      <CFlex :display="{ base: 'none', md: 'flex' }" ml="10">
        <!-- <DesktopNav /> -->
        Desktop Nav
      </CFlex>
    </CFlex>
  </CFlex>
</template>
<script>
import { CFlex, CImage, CIconButton, CText /* , CIcon */ } from '@chakra-ui/vue'
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'
import logo from '@/static/logo.svg'

export default {
  name: 'MDefault',
  components: { CFlex, CImage, CIconButton, CText /* , CIcon */ },
  props: {},
  data() {
    return { logo }
  },
  methods: {
    onToggle() {},
  },
}
</script>
