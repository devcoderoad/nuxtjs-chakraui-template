<template>
  <CDrawer
    :auto-focus="false"
    :isOpen="isOpen"
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
            :_focus="{
              boxShadow: 'none',
            }"
            ml="auto"
            position="absolute"
            right="2"
            border-radius="0"
            @click="onCloseLocal"
          />
          <CStack
            v-chakra="{
              a: {
                marginBottom: '.275rem',
                outline: 0,
                border: 0,
                _hover: {
                  textDecoration: 'none',
                  color: 'gray.400',
                  marginLeft: '.125rem',
                },
                _focus: {
                  boxShadow: 'none',
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
            <CBox as="nav">
              <CLink href="/dashboard/profile" d="block">
                <CIcon name="user" /> Profile
              </CLink>
              <CLink href="/dashboard/setting" d="block"
                ><CIcon name="gear" /> Setting</CLink
              >
            </CBox>
            <CDivider />
            <CHeading size="md">Typograpy</CHeading>
            <CBox as="nav">
              <CLink href="/dashboard/paragraph" d="block"
                ><CIcon name="moon" /> Paragraph</CLink
              >
              <CLink href="/dashboard/heading" d="block"
                ><CIcon name="warning-alt" /> Heading</CLink
              >
              <CLink href="/dashboard/cards" d="block"
                ><CIcon name="tag" /> Cards</CLink
              >
            </CBox>
            <CDivider />
            <CHeading size="md"> Element</CHeading>
            <CBox as="nav">
              <CLink href="/dashboard/forms" d="block"
                ><CIcon name="id-badge" /> Forms</CLink
              >
              <CLink href="/dashboard/charts" d="block"
                ><CIcon name="envelope" /> Charts</CLink
              >
              <CLink href="/dashboard/tables" d="block"
                ><CIcon name="comment" /> Tables</CLink
              >
            </CBox>
            <CDivider />
            <CBox mt="6" mx="auto">
              <img :src="logo" width="100px" alt="Alternative" />
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
  CDivider,
  CLink,
  CIcon,
  CStack,
} from '@chakra-ui/vue'

import logo from '@/static/logo.svg'

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
    CDivider,
    CLink,
    CIcon,
    CStack,
  },
  props: {
    isOpen: {
      type: Boolean,
    },
  },
  data() {
    return { logo }
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
