<template>
  <div>
    <CBox min-h="100vh">
      <CBox on-close="onClose" display="{ base: 'none', md: 'block' }">
        <CBox>
          <Flex
            h="20"
            align-items="center"
            mx="8"
            justify-content="space-between"
          >
            <Text font-size="2xl" font-family="monospace" font-weight="bold">
              Logo
            </Text>
            <!-- <CloseButton :onClick="" /> -->
          </Flex>
          <Link href="#">
            <Flex align="center" p="4" mx="4">
              <Icon
                mr="4"
                font-size="16"
                :group-hover="{ color: 'white' }"
                as="{icon}"
              />
            </Flex>
          </Link>
        </CBox>
        <CDrawer
          isOpen="isOpen"
          placement="right"
          :on-close="close"
          :initialFocusRef="() => $refs.inputInsideModal"
        >
          <CDrawerOverlay />
          <CDrawerContent>
            <CDrawerCloseButton />
            <CDrawer-header>Create your account</CDrawer-header>

            <CDrawerBody>
              <CInput ref="inputInsideModal" placeholder="Type here..." />
            </CDrawerBody>

            <CDrawerFooter>
              <CButton variant="outline" mr="3" @click="isOpen = false"
                >Cancel</CButton
              >
              <CButton variant-color="blue">Save</CButton>
            </CDrawerFooter>
          </CDrawerContent>
        </CDrawer>
        <MobileNav :display="{ base: 'flex', md: 'none' }" on-open="{onOpen}" />
        <!-- <CBox ml={{ base: 0, md: 60 }} p="4"> -->
        {{ children }}
        <!-- </CBox> -->
      </CBox>
    </CBox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CBox, CDrawer, CDrawerContent, CButton } from '@chakra-ui/vue'
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ]

export default Vue.extend({
  name: 'DefaultSidebar',
  components: {
    CBox,
    CDrawer,
    CDrawerContent,
    CButton,
  },
  props: {
    children: { type: String, default: () => '' },
  },
  data() {},
  methods: {
    onClose() {
      return null
    },
    isOpen() {
      return null
    },
  },
})
</script>
