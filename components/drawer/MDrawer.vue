<template>
  <CDrawer
    :autoFocus="true"
    :isOpen="cIsDrawerOpen"
    :onClose="onCloseDrawer"
    :returnFocusOnClose="false"
    :onOverlayClick="onOverlayClick"
    placement="left"
  >
    <CDrawerOverlay />
    <CDrawerContent w="full">
      <CDrawerBody style="overflow: hidden">
        <CBox
          h="full"
          alignItems="center"
          mx="auto"
          justifyContent="space-between"
          :w="{ base: 'full' }"
        >
          <CDrawerCloseButton
            ml="auto"
            position="absolute"
            right="2"
            border-radius="0"
            @click="onCloseLocal"
          />
          <CStack :spacing="5" mt="12" fontWeight="bold" color="gray.500">
            <CHeading size="md" color="gray" marginBottom="2">Account</CHeading>
            <CBox as="nav" m="0">
              <CLink
                href="/profile"
                d="block"
                :_hover="{ underline: 'none', color: 'gray.400' }"
              >
                <CIcon name="user" mr="1" /> Profile
              </CLink>
              <CLink
                href="/setting"
                d="block"
                :_hover="{ underline: 'none', color: 'gray.400' }"
                ><CIcon name="home" mr="1" /> Setting</CLink
              >
            </CBox>
            <CHeading size="md" color="gray" marginBottom="2"
              >Typograpy</CHeading
            >
            <CBox as="nav" m="0">
              <CLink href="/paragraph" d="block">Paragraph</CLink>
              <CLink href="/heading" d="block">Heading</CLink>
              <CLink href="/cards" d="block">Cards</CLink>
            </CBox>
            <CHeading size="md" color="gray" marginBottom="2">Element</CHeading>
            <CBox as="nav" m="0">
              <CLink href="/forms" d="block">Forms</CLink>
              <CLink href="/charts" d="block">Charts</CLink>
              <CLink href="/tables" d="block">Tables</CLink>
            </CBox>
          </CStack>
        </CBox>
      </CDrawerBody>
    </CDrawerContent>
  </CDrawer>
</template>

<script>
import {
  CBox,
  // CFlex,
  CDrawer,
  CDrawerContent,
  CDrawerBody,
  CDrawerOverlay,
  CDrawerCloseButton,
  CHeading,
  CLink,
  CIcon,
  CStack,
} from '@chakra-ui/vue'

export default {
  name: 'MDrawer',
  components: {
    CBox,
    CDrawer,
    CDrawerContent,
    CDrawerBody,
    CDrawerOverlay,
    CDrawerCloseButton,
    CHeading,
    CLink,
    CIcon,
    CStack,
  },
  props: {
    cIsDrawerOpen: {
      type: Boolean,
    },
  },
  methods: {
    onCloseLocal() {
      return this.$emit('toggleDrawer')
    },
    onCloseDrawer() {
      return this.onCloseLocal()
    },
    onOverlayClick() {
      return console.log('overlay click')
    },
  },
}
</script>
