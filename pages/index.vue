<template>
  <CBox d="block" pos="relative">
    <CBox as="section" d="block" pos="relative">
      <CBox
        d="block"
        w="100%"
        h="100vh"
        bgImage="https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=920&q=80"
        bgRepeat="no-repeat"
        bgPosition="top center"
        bgSize="cover"
        pos="relative"
        zIndex="0"
        :_before="{
          content: '\' \'',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'none',
          overflow: 'hidden',
          // bgColor: 'rgba(0, 0, 0, 0.35)',
        }"
      >
        <CBox
          d="block"
          mx="auto"
          pos="absolute"
          bottom="10"
          right="10"
          left="0"
          zIndex="1"
          textAlign="right"
          :w="{
            md: 'var(--sizes-containers-sm)',
            xl: 'var(--sizes-containers-xl)',
          }"
        >
          <CHeading mb="4" color="white" size="2xl" m="0" p="0">
            ⚡️ Hello chakra-ui/vue
          </CHeading>
          <CHeading size="xl" color="white" m="0" p="0"
            >Latte One Brewd</CHeading
          >
          <CText color="white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vero
            adipisci odit voluptates deleniti! Aliquam quod nisi facilis illo,
            deleniti sed vel.
          </CText>
        </CBox>
      </CBox>
    </CBox>
    <CFlex
      justify="center"
      direction="column"
      align="center"
      flex="wrap"
      my="12"
    >
      <CBox
        :w="['100%', '66%']"
        my="3"
        mx="auto"
        :d="['block', 'flex']"
        pos="relative"
      >
        <CBox>
          <CHeading>Welcome to COFFD ⚡️ </CHeading>
          <CText as="p">
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
      <CBox
        my="8"
        py="8"
        :w="{
          md: 'var(--sizes-containers-sm)',
          xl: 'var(--sizes-containers-xl)',
        }"
      >
        <CHeading
          size="xl"
          textAlign="center"
          pos="relative"
          :_before="{
            content: '\'\'',
            position: 'absolute',
            width: '10%',
            height: '3px',
            bgColor: '#836940',
            bottom: '-12px',
            zIndex: 1,
          }"
          >Responsive Brewd Latte</CHeading
        >
        <MCardOffset />
      </CBox>
      <CBox
        h="100%"
        my="24"
        w="full"
        overflow="hidden"
        justify="center"
        align="center"
        bgImg="https://images.unsplash.com/photo-1618105965240-9aa565e73a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1152&q=80"
      >
        <CBox :w="['xl']" m="0" py="12">
          <CHeading size="md" mx="auto" color="whiteAlpha.800"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            soluta? Quam tenetur, fugit voluptatibus dignissimos nulla ipsa cum
            quasi enim rerum debitis? Qui provident corrupti praesentium eum ab
            consequatur sapiente molestias, architecto natus iste sit
            dignissimos aut? Ab provident maiores voluptate quas laboriosam
            cupiditate ipsa.</CHeading
          >
        </CBox>
      </CBox>
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
    </CFlex>
  </CBox>
</template>

<script>
import {
  CBox,
  CButton,
  // CTag,
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
  // CStack,
  CHeading,
  CText,
  // CLink,
} from '@chakra-ui/vue'

/* Components */
import MCardOffset from '@/components/card/MOffset.vue'
import logo from '@/static/logo.svg'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    // CTag,
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
    // CStack,
    CHeading,
    CText,
    // CLink,
    MCardOffset,
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
