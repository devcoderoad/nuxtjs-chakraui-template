<template>
  <CBox>
    <h1>Dashboard Page</h1>
  </CBox>
</template>

<script>
import { CBox } from '@chakra-ui/vue'

export default {
  name: 'DashboardPage',
  components: {
    CBox,
  },
  layout: 'dashboard',
  data() {
    return { modal: false }
  },
}
</script>
