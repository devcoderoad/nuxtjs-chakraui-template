<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main" minH="100vh" role="dashboard">
          <CReset />
          <CBox
            transition="3s ease"
            :w="{ base: 'full', md: 60 }"
            pos="fixed"
            h="full"
          >
            <CFlex
              h="20"
              alignItems="center"
              mx="8"
              justifyContent="space-between"
            >
              <Text font-size="2xl" fon-family="monospace" font-weight="bold">
                Logo
              </Text>
              <CButton :display="{ base: 'flex', md: 'none' }" />
            </CFlex>
            <CLink key="{link.name}" icon="{link.icon}"> Link </CLink>
          </CBox>
          <CDrawer
            :autoFocus="false"
            :isOpen="isDrawerOpen"
            :onClose="onClose"
            :returnFocusOnClose="false"
            :onOverlayClick="onClose"
            size="full"
            placement="left"
          >
            <CDrawerContent>
              <CBox
                transition="3s ease"
                borderRight="1px"
                pos="fixed"
                h="full"
                :w="{ base: 'full', md: 60 }"
              >
                <CFlex
                  h="20"
                  alignItems="center"
                  mx="8"
                  justifyContent="space-between"
                >
                  <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                  </Text>
                  <CloseButton
                    :display="{ base: 'flex', md: 'none' }"
                    :onClick="onClose"
                  />
                </CFlex>
                <CLink key="{link.name1}" icon="{link.icon}">
                  {{ 'link.name1' }}
                </CLink>
              </CBox>
            </CDrawerContent>
          </CDrawer>
          <CBox :onOpen="onMobileOpen">
            <CFlex
              :ml="{ base: 0, md: 60 }"
              :px="{ base: 4, md: 4 }"
              height="20"
              align-items="center"
              border-bottom-width="1px"
              border-bottom-color="red"
              :justify-content="{ base: 'space-between', md: 'flex-end' }"
            >
              <CIconButton
                display="{ base: 'flex', md: 'none' }"
                :onClick="onMobileOpen"
                variant="outline"
                aria-label="open menu"
              />

              <Text
                :display="{ base: 'flex', md: 'none' }"
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Logo
              </Text>
              <CStack :spacing="{ base: '0', md: '6' }">
                <CIconButton size="lg" variant="ghost" aria-label="open menu" />
                <CFlex align-items="center">
                  <CMenu>
                    <CMenuButton
                      py="2"
                      transition="all 0.3s"
                      :focus="{ boxShadow: 'none' }"
                    >
                      <CStack>
                        <CAvatar
                          size="sm"
                          src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        />
                        <CStack
                          :display="{ base: 'none', md: 'flex' }"
                          align-items="flex-start"
                          spacing="1px"
                          ml="2"
                        >
                          <Text fontSize="sm">Justina Clark</Text>
                          <Text fontSize="xs" color="gray.600"> Admin </Text>
                        </CStack>
                        <CBox display="{ base: 'none', md: 'flex' }">
                          <!-- <FiChevronDown /> -->V
                        </CBox>
                      </CStack>
                    </CMenuButton>
                    <CMenuList>
                      <CMenuItem key="profile">Profile</CMenuItem>
                      <CMenuItem key="settings">Settings</CMenuItem>
                      <CMenuItem key="billing">Billing</CMenuItem>
                      <CMenuDivider />
                      <CMenuItem key="signout">Sign out</CMenuItem>
                    </CMenuList>
                  </CMenu>
                </CFlex>
              </CStack>
            </CFlex>
          </CBox>
          <CBox :ml="{ base: 0, md: 60 }" p="4">
            <Nuxt />
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CFlex,
  CDrawer,
  CDrawerContent,
  CButton,
  CMenu,
  CMenuList,
  CMenuItem,
  CMenuDivider,
  CMenuButton,
  CIconButton,
  CAvatar,
  CStack,
  CLink,
} from '@chakra-ui/vue'

export default {
  name: 'DashboardLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex,
    CDrawer,
    CDrawerContent,
    CButton,
    CStack,
    CMenu,
    CMenuList,
    CMenuItem,
    CMenuDivider,
    CMenuButton,
    CIconButton,
    CAvatar,
    CLink,
  },
  data() {
    return { isDrawerOpen: false, onMobileOpen: false }
  },
  methods: {
    onClose() {
      return null
    },
  },
}
</script>
