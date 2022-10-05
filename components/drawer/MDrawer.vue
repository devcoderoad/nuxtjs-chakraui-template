<template>
  <CDrawer
    :autoFocus="false"
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
          <CStack
            v-chakra="{
              a: {
                marginBottom: '.175rem',
                _hover: {
                  textDecoration: 'none',
                  color: 'gray.400',
                  marginLeft: '.125rem',
                },
                svg: {
                  marginRight: 'var(--space-1)',
                },
              },
              h2: {
                color: 'gray.400',
                marginBottom: 'var(--space-5)',
              },
            }"
            :spacing="5"
            mt="12"
            fontWeight="bold"
            color="gray.500"
            height="100%"
            overflowY="auto"
          >
            <CHeading size="md">Account</CHeading>
            <CBox as="nav" m="0">
              <CLink href="/profile" d="block">
                <CIcon name="user" /> Profile
              </CLink>
              <CLink href="/setting" d="block"
                ><CIcon name="gear" /> Setting</CLink
              >
            </CBox>
            <CHeading size="md">Typograpy</CHeading>
            <CBox as="nav" m="0">
              <CLink href="/paragraph" d="block"
                ><CIcon name="moon" /> Paragraph</CLink
              >
              <CLink href="/heading" d="block"
                ><CIcon name="warning-alt" /> Heading</CLink
              >
              <CLink href="/cards" d="block"><CIcon name="tag" /> Cards</CLink>
            </CBox>
            <CHeading size="md"> Element</CHeading>
            <CBox as="nav" m="0">
              <CLink href="/forms" d="block"
                ><CIcon name="id-badge" /> Forms</CLink
              >
              <CLink href="/charts" d="block"
                ><CIcon name="envelope" /> Charts</CLink
              >
              <CLink href="/tables" d="block"
                ><CIcon name="comment" /> Tables</CLink
              >
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
