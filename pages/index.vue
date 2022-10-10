<template>
  <CBox>
    <!-- <CHeading text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading> -->
    <CFlex justify="center" direction="column" align="center">
      <!-- <CBox my="3">
        <img :src="logo" width="100px" alt="Alternative" />
      </CBox> -->
      <CBox
        :w="['100%', '66%']"
        my="3"
        mx="auto"
        :d="['block', 'flex']"
        pos="relative"
      >
        <CBox>
          <CHeading>Welcome to NuxtCha ⚡️ </CHeading>
          <CText as="p" color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            expedita earum, dolor culpa ullam ut, molestias nesciunt, atque aut
            vero voluptatem. Fugiat est deleniti natus aspernatur ipsa laborum
            consectetur repudiandae delectus? Sapiente asperiores quibusdam
            nihil, totam necessitatibus velit quidem odio dolorem ad maiores
            fuga.
          </CText>
        </CBox>
        <div
          v-chakra="{
            position: 'relative',
            mx: 'auto',
            borderRadius: 'full',
            ':before, :after': {
              content: `' '`,
            },
            ':after': {
              bgColor: 'blue.100',
              position: 'absolute',
              top: '50px',
              right: '50px',
              bottom: '50px',
              width: '400px',
              height: '400px',
              maxWidth: '400px',
              zIndex: -1,
              borderRadius: 'full',
            },
          }"
        >
          <CImage
            borderRadius="full"
            boxSize="400px"
            maxWidth="400px"
            borderWidth="12px"
            borderColor="blue.200"
            alt="NuxtCha"
            src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </div>
      </CBox>
      <CBox my="3">
        <CIconButton
          mr="3"
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
          @click="toggleColorMode"
        />
        <CButton left-icon="info" variant-color="blue" @click="showToast">
          Show Toast
        </CButton>
      </CBox>
      <!-- <CAvatarGroup>
        <CAvatar
          name="Evan You"
          alt="Evan You"
          src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
        >
          <CAvatarBadge size="1.0em" bg="green.500" />
        </CAvatar>
        <CAvatar
          name="Jonathan Bakebwa"
          alt="Jonathan Bakebwa"
          src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
        >
          <CAvatarBadge size="1.0em" bg="green.500" />
        </CAvatar>
        <CAvatar
          name="Segun Adebayo"
          alt="Segun Adebayo"
          src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
        >
          <CAvatarBadge size="1.0em" bg="green.500" />
        </CAvatar>
        <CAvatar src="pop">
          <CAvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
        </CAvatar>
      </CAvatarGroup> -->
      <CButton
        left-icon="close"
        variant-color="red"
        mt="3"
        @click="showModal = true"
      >
        Delete Account
      </CButton>
      <CModal :is-open="showModal">
        <CModalOverlay />
        <CModalContent>
          <CModalHeader>Are you sure?</CModalHeader>
          <CModalBody>Deleting user cannot be undone</CModalBody>
          <CModalFooter>
            <CButton @click="showModal = false"> Cancel </CButton>
            <CButton
              margin-left="3"
              variant-color="red"
              @click="showModal = false"
            >
              Delete User
            </CButton>
          </CModalFooter>
          <CModalCloseButton @click="showModal = false" />
        </CModalContent>
      </CModal>
      <CBox
        d="flex"
        wrap
        direction="row"
        justify-content="center"
        justify="center"
        mx="auto"
        mt="12"
      >
        <CStack spacing="5" is-inline>
          <CBox
            :p="5"
            shadow="xl"
            :bgColor="
              colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.300'
            "
            border-width="1px"
            border-radius="10"
            :_hover="{
              bg: colorMode === 'light' ? 'gray.100' : 'gray.800',
              shadow: 'lg',
            }"
            :w="{ base: '33%', md: '100%' }"
          >
            <CHeading size="lg">See the Vue</CHeading>
            <CText :mt="4">Vue makes front-end development a breeze.</CText>
          </CBox>
          <CBox
            :p="5"
            shadow="xl"
            :bgColor="
              colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.300'
            "
            border-width="1px"
            border-radius="10"
            :_hover="{
              bg: colorMode === 'light' ? 'gray.100' : 'gray.800',
              shadow: 'lg',
            }"
            :w="{ base: '33%', md: '100%' }"
          >
            <CHeading size="lg">Go Nuxt!</CHeading>
            <CText :mt="4">Nuxt makes writing Vue even easier.</CText>
          </CBox>
          <CBox
            :p="5"
            shadow="xl"
            :bgColor="
              colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.300'
            "
            border-width="1px"
            border-radius="10"
            :_hover="{
              bg: colorMode === 'light' ? 'gray.100' : 'gray.800',
              shadow: 'lg',
            }"
            :w="{ base: '33%', md: '100%' }"
          >
            <CLink href="/dashboard" pass-href
              ><CHeading size="lg">Go to Dashboard</CHeading></CLink
            >
            <CText :mt="4">Nuxt makes writing Vue even easier.</CText>
          </CBox>
        </CStack>
      </CBox>
    </CFlex>
  </CBox>
</template>

<script>
import {
  CBox,
  CButton,
  // CAvatarGroup,
  // CAvatar,
  // CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CStack,
  CHeading,
  CText,
  CLink,
} from '@chakra-ui/vue'

import logo from '@/static/logo.svg'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    // CAvatarGroup,
    // CAvatar,
    // CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CStack,
    CHeading,
    CText,
    CLink,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  layout: 'default',
  data() {
    return {
      showModal: false,
      logo,
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
    showToast() {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    },
  },
}
</script>
