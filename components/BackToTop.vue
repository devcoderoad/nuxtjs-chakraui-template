<template>
  <CBox v-if="isShow" pos="fixed" zIndex="12" right="0" bottom="0">
    <CIconButton icon="arrow-up" color="outline-primary" />
  </CBox>
</template>

<script>
import { CBox, CIconButton } from '@chakra-ui/vue'
export default {
  name: 'MBackToTop',
  components: {
    CBox,
    CIconButton,
  },
  props: { isShow: { type: Boolean, default: () => false } },
}
</script>
