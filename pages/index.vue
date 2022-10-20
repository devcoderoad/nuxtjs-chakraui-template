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
          <CHeading>Welcome to Brewd </CHeading>
          <CText as="p" my="6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            expedita earum, dolor culpa ullam ut, molestias nesciunt, atque aut
            vero voluptatem. Fugiat est deleniti natus aspernatur ipsa laborum
            consectetur repudiandae delectus? Sapiente asperiores quibusdam
            nihil, totam necessitatibus velit quidem odio dolorem ad maiores
            fuga.
          </CText>
          <CHeading mt="4" size="sm"
            ><CButton
              variant-color="green"
              size="lg"
              shadow="xl"
              borderRadius="full"
              >Dashboard</CButton
            ></CHeading
          >
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
            src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80"
            fallbackSrc="https://via.placeholder.com/400"
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
        pos="relative"
        :_before="{
          pos: 'absolute',
          content: '\' \'',
          bgImg:
            'https://images.unsplash.com/photo-1540965555-ef9a836372ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&h=480&q=80',
          bgRepeat: 'no-repeat',
          bgPosition: 'right bottom',
          opacity: '.25',
          w: 'full',
          h: 'full',
          right: '0',
          bottom: '0',
          zIndex: '-1',
        }"
        :_after="{
          content: '\' \'',
          bgImg: 'linear-gradient(rgba(255 255 255 / 1%), #ffffff)',
          pos: 'absolute',
          h: '40%',
          w: '100%',
          bottom: '0',
          zIndex: '-1',
        }"
      >
        <CBox
          :w="{
            md: 'var(--sizes-containers-sm)',
            xl: 'var(--sizes-containers-xl)',
          }"
        >
          <CHeading
            mb="8"
            pos="relative"
            :_before="{
              content: '\' \'',
              position: 'absolute',
              width: '10%',
              height: '3px',
              backgroundColor: '#836940',
              bottom: '-12px',
              zIndex: 1,
            }"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CHeading>
          <CFlex alignItems="top" py="4">
            <CBox w="auto" px="4">
              <CImage
                src="https://images.unsplash.com/photo-1587403090535-cbf88ede773a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&h=1036&q=80"
                maxW="490"
                shadow="lg"
                rounded="lg"
              />
              <CBox as="p" my="9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quo nam, doloremque eaque illum laborum ullam dolorem
                consequuntur quasi voluptates ea? Velit.
              </CBox>
            </CBox>
            <CBox w="auto" px="4">
              <CHeading size="lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum.
              </CHeading>
              <CBox as="p" my="9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                quod quae, delectus neque blanditiis adipisci repellat iusto
                deleniti non quam dignissimos similique et sapiente incidunt
                magni? Quidem provident, nam soluta sequi quis unde.
              </CBox>
            </CBox>
          </CFlex>
        </CBox>
      </CBox>
      <CBox
        h="100%"
        my="24"
        w="100%"
        mx="auto"
        overflow="hidden"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
        bgImg="https://images.unsplash.com/photo-1618105965240-9aa565e73a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1152&q=80"
      >
        <CBox :w="['xl']" m="0" py="12" mx="auto">
          <CHeading size="md" mx="auto" :my="[5, 10]" color="whiteAlpha.800"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            soluta? Quam tenetur, fugit voluptatibus dignissimos nulla ipsa cum
            quasi enim rerum debitis? Qui provident corrupti praesentium eum ab
            consequatur sapiente molestias, architecto natus iste sit
            dignissimos aut? Ab provident maiores voluptate quas laboriosam
            cupiditate ipsa.</CHeading
          >
        </CBox>
      </CBox>
      <CBox
        mt="6"
        mb="6"
        maxW="100%"
        :w="{
          base: 'var(--sizes-containers-xl)',
          md: 'var(--sizes-containers-md)',
          lg: 'var(--sizes-containers-md)',
          xl: 'var(--sizes-containers-xl)',
        }"
      >
        <CHeading textAlign="center" mx="auto" mb="4"
          >Our Best Seller Products</CHeading
        >
        <CBox
          mt="6"
          mb="6"
          display="flex"
          flexDirection="row"
          alignItems="stretch"
          pos="relative"
          overflow-x="auto"
          overflow-y="hidden"
          white-space="wrap"
        >
          <CBox my="4" py="2" mx="auto" d="flex">
            <CBox
              maxW="xs"
              minH="160px"
              display="inline-block"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
            >
              <CHeading size="sm" mb="3" mt="3"
                >Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=1035&w=1035&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quis cumque, animi pariatur dicta officiis.
              </CBox>
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Deserunt aspernatur dicta distinctio hic quia!</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium quas nemo perferendis expedita odit.</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Animi velit dolorum est quod facere ab possimus.</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=1035&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                recusandae cumque. Nihil, quidem enim.</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1582726457394-afe6407d0996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=1035&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                tenetur nesciunt doloribus asperiores quisquam!</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Deserunt aspernatur dicta distinctio hic quia!</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1587734361993-0033759da68b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&h=1036&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur facere quaerat cum a provident.</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Animi velit dolorum est quod facere ab possimus.</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=1024&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                nulla tenetur excepturi est eaque?</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
            <CBox
              maxW="xs"
              w="xs"
              p="3"
              bgColor="white"
              shadow="lg"
              m="2"
              rounded="lg"
              ><CHeading size="sm" mb="3" mt="3"
                >Animi velit dolorum est quod facere ab possimus.</CHeading
              >
              <CImage
                src="https://images.unsplash.com/photo-1550731358-491ded4af838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80"
                alt="Logo"
                my="8"
              />
              <CBox as="p" fontSize="sm"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                nulla tenetur excepturi est eaque?</CBox
              >
              <CLink href="#" fontSize="sm" fontWeight="bolder"
                >visit &raquo;</CLink
              >
            </CBox>
          </CBox>
        </CBox>
        <CHeading size="xs" mt="2" textAlign="right"
          >View all products</CHeading
        >
      </CBox>
      <CBox
        :w="{
          md: 'var(--sizes-containers-sm)',
          xl: 'var(--sizes-containers-xl)',
        }"
        my="12"
      >
        <CHeading textAlign="center" mx="auto" mb="4"
          >Our Customer Testimonials</CHeading
        >
        <CBox textAlign="center">
          <CHeading size="md"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            alias laboriosam, nobis totam autem adipisci sed eos possimus.
          </CHeading>
        </CBox>
      </CBox>
    </CFlex>
    <CBox
      mx="auto"
      py="12"
      :d="['block', 'flex']"
      :w="{
        md: 'var(--sizes-containers-sm)',
        xl: 'var(--sizes-containers-xl)',
      }"
      alignItems="center"
    >
      <CBox :w="['100%', '50%']" align="center">
        <CImage
          shadow="xl"
          rounded="lg"
          src="https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80"
          alt="Brewd Logo"
          maxH="520"
        />
      </CBox>
      <CBox :w="['100%', '50%']">
        <CHeading size="md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          delectus nemo.
        </CHeading>
        <CBox as="p" my="4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          aperiam! Laborum qui dolor quae rem accusantium aliquid, facere iusto
          quia reprehenderit! Autem, ipsam eveniet. Aut harum dolores id dolore?
          Repellendus, dolore? Eveniet numquam nulla nisi, fugit omnis qui
          facere iusto, quam enim aliquam consequuntur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptas veritatis dignissimos
          adipisci sint facere at itaque, doloremque ducimus! Dolor porro illum
          laborum, earum aliquam repudiandae quae saepe voluptate, eaque animi
          corrupti veniam vel dolorum dicta est. Iste aliquam quos officia ad.
          Corporis, adipisci consequatur!
        </CBox>
        <CButton variant-color="green" px="6" borderRadius="full" shadow="xl"
          >View</CButton
        >
      </CBox>
    </CBox>
    <CBox
      as="footer"
      mx="auto"
      my="12"
      px="4"
      :pt="[4, 6]"
      :pb="[6, 12]"
      :width="{
        xl: 'var(--sizes-containers-xl)',
      }"
    >
      <CBox
        :display="['inline-block', 'flex']"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        pos="relative"
      >
        <CBox>
          <CImage src="./logo.svg" alt="Brewd Logo" maxW="170px" />
          <CFlex>
            <CInput size="120" my="5" shadow="lg" />
            <CButton
              size="sm"
              variant-color="green"
              ml="2"
              shadow="lg"
              my="5"
              px="6"
              >subscribe</CButton
            ></CFlex
          >
          <CBox>
            <CHeading size="xs">Follow Us</CHeading>
            <CButton shadow="lg">F</CButton>
            <CButton shadow="lg">T</CButton>
            <CButton shadow="lg">P</CButton>
            <CButton shadow="lg">Y</CButton>
          </CBox>
        </CBox>
        <CBox
          v-chakra="{
            'ul li': {
              listStyleType: 'none',
              marginLeft: '0rem',
            },
            a: {
              fontWeight: 'bolder',
              fontSize: 'sm',
            },
          }"
          :d="['flex']"
          :w="['100%', '40%']"
          :mt="[6, 0]"
          justifyContent="space-between"
          alignItems="top"
        >
          <CBox d="inline-block" w="full">
            <CHeading size="sm" mb="3">About Us</CHeading>
            <ul>
              <li><CLink href="#heading">History</CLink></li>
              <li><CLink href="#heading">Branches</CLink></li>
              <li><CLink href="#heading">Shop</CLink></li>
              <li><CLink href="#heading">Gallery</CLink></li>
              <li><CLink href="#heading">Careers</CLink></li>
              <li><CLink href="#heading">Contact Us</CLink></li>
            </ul>
          </CBox>
          <CBox d="inline-block" w="full">
            <CHeading size="sm" mb="3">Products</CHeading>
            <ul>
              <li><CLink href="#heading">Coffee Lattes</CLink></li>
              <li><CLink href="#heading">Green Coffee</CLink></li>
              <li><CLink href="#heading">Coffee Bean</CLink></li>
              <li><CLink href="#heading">Java Coffee</CLink></li>
              <li><CLink href="#heading">Robusta Coffee</CLink></li>
            </ul>
          </CBox>
        </CBox>
      </CBox>
    </CBox>
    <CBox mt="12" mb="6" mx="auto" textAlign="center">
      <p v-chakra fontSize="sm" color="gray.500">
        Copyright 2022 @ Brewd Company. All Rigth Reserved.
      </p>
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
