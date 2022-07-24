<template>
  <CBox>
    <h1>Dashboard Page</h1>
  </CBox>
</template>

<script lang="ts">
import Vue from 'vue'

import { CBox } from '@chakra-ui/vue'

export default Vue.extend({
  name: 'DashboardPage',
  components: {
    CBox,
  },
  layout: 'dashboard',
  data() {
    return { modal: false }
  },
})
</script>
