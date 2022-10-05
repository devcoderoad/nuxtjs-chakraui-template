<template>
  <CAlert
    :status="mode"
    v-bind="{ ...position, ...(showAlert ? { d: 'flex' } : { d: 'none' }) }"
    h="60px"
  >
    <CAlertIcon />
    <CAlertTitle :mr="2">{{ title }} </CAlertTitle>
    <CAlertDescription>{{ description }}</CAlertDescription>
    <CCloseButton
      position="absolute"
      right="8px"
      top="8px"
      @click="isShowAlert"
    />
  </CAlert>
</template>
<script>
import {
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription,
  CCloseButton,
} from '@chakra-ui/vue'

export default {
  name: 'MAlert',
  components: {
    CAlert,
    CAlertIcon,
    CAlertTitle,
    CAlertDescription,
    CCloseButton,
  },
  props: {
    mode: {
      type: String,
      default: () => 'info',
    },
    title: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    position: {
      type: Object,
      default: () => {
        return { position: 'relative', bottom: 0 }
      },
    },
  },
  data() {
    return { showAlert: true }
  },
  methods: {
    isShowAlert() {
      return (this.showAlert = !this.showAlert)
    },
  },
}
</script>
