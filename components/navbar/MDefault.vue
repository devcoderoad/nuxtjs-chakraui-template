<template>
  <CFlex
    alignItems="center"
    justify="center"
    mx="auto"
    bgColor="transparent"
    bg="linear-gradient(to bottom, rgb(201 201 201 / 45%), rgba(50, 55, 59, 0)) !important;"
    p="3"
    height="76"
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
            fontWeight: 'bold',
            fontSize: ['.77rem', '.88rem'],
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
      >
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          About
        </CLink>
        <!-- <CMenu>
          <CMenuButton
            right-icon="chevron-down"
            p="0"
            m="0"
            pos="relative"
            d="block"
            outline="0"
            color="var(--colors-primary)"
            textShadow="1px 1px var(--colors--white)"
            fontWeight="bold"
            border="0"
            rounded="0"
            :fontSize="['.77rem', '.88rem']"
            :_hover="{ bg: 'none' }"
            :_focus="{ bg: 'none' }"
            :_active="{ bg: 'none' }"
            bg="transparent"
            >Product</CMenuButton
          >
          <CMenuList>
            <CMenuItem>Download</CMenuItem>
            <CMenuItem>Create a Copy</CMenuItem>
            <CMenuItem>Mark as Draft</CMenuItem>
            <CMenuItem>Delete</CMenuItem>
            <CMenuItem> Attend a Workshop </CMenuItem>
          </CMenuList>
        </CMenu> -->
        <c-popover trigger="hover">
          <c-popover-trigger>
            <c-link
              text-decoration="none"
              font-weight="bold"
              color="blue.500"
              :textAlign="[{ base: 'center', md: 'left' }]"
              :mx="[2, 3, 6]"
            >
              Product
            </c-link>
          </c-popover-trigger>
          <c-dark-mode>
            <c-popover-content
              border="0"
              zIndex="4"
              width="400px"
              color="white"
              rounded="lg"
            >
              <c-box p="5">
                <c-avatar
                  name="swyx"
                  src="https://pbs.twimg.com/profile_images/1201029434054041606/efWs7Lr9_400x400.jpg"
                />
                <c-text mt="4" fontWeight="bold">
                  swyx
                  <c-badge ml="3" variant="solid" font-size="xs">
                    Follows you
                  </c-badge>
                </c-text>
                <c-text mt="3">
                  Infinite Builder working on DX @Netlify. Helping people
                  #LearnInPublic
                </c-text>
              </c-box>
            </c-popover-content>
          </c-dark-mode>
        </c-popover>
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
          Merch
        </CLink>
        <CLink :textAlign="[{ base: 'center', md: 'left' }]" :mx="[2, 3, 6]">
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
  // CMenu,
  // CMenuButton,
  // CMenuList,
  // CMenuItem,
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
  components: {
    CFlex,
    CImage,
    CIconButton,
    // CMenu,
    // CMenuButton,
    // CMenuList,
    // CMenuItem,
    CLink /* CText, */ /* , CIcon */,
  },
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
