<template>
  <c-box min-h="100vh">
    <c-box on-close="onClose" display="{ base: 'none', md: 'block' }">
      <c-box>
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
      </c-box>
      <c-drawer
        isOpen="isOpen"
        placement="right"
        :on-close="close"
        :initialFocusRef="() => $refs.inputInsideModal"
      >
        <c-drawer-overlay />
        <c-drawer-content>
          <c-drawer-close-button />
          <c-drawer-header>Create your account</c-drawer-header>

          <c-drawer-body>
            <c-input ref="inputInsideModal" placeholder="Type here..." />
          </c-drawer-body>

          <c-drawer-footer>
            <c-button variant="outline" mr="3" @click="isOpen = false"
              >Cancel</c-button
            >
            <c-button variant-color="blue">Save</c-button>
          </c-drawer-footer>
        </c-drawer-content>
      </c-drawer>
      <MobileNav :display="{ base: 'flex', md: 'none' }" on-open="{onOpen}" />
      <c-box ml={{ base: 0, md: 60 }} p="4">
      {{ children }}
    </c-box>
  </c-box>
</template>

<script lang="ts">
import Vue from 'vue'

// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ]

export default Vue.extend({
  name: 'DefaultSidebar',
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
