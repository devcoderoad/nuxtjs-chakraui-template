<template>
  <CBox>
    <article>
      <h1>Setting Page</h1>
      <nuxt-content :document="dashboard" />
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
      <CAvatarGroup>
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
      </CAvatarGroup>
      <CButton
        left-icon="close"
        variant-color="red"
        mt="3"
        @click="showModal = true"
      >
        Delete Account
      </CButton>
    </article>
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
  </CBox>
</template>

<script>
import {
  CBox,
  CButton,
  CIconButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
} from '@chakra-ui/vue'

export default {
  name: 'DashboardSetting',
  components: {
    CBox,
    CButton,
    CIconButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  layout: 'dashboard',
  async asyncData({ $content }) {
    const dashboard = await $content('dashboard').fetch()
    return {
      dashboard,
    }
  },
  data() {
    return {
      showModal: false,
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
