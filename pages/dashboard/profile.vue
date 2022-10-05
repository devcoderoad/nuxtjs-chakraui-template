<template>
  <CBox>
    <article>
      <h1>Profile Page</h1>
      <nuxt-content :document="dashboard" />
    </article>
  </CBox>
</template>

<script>
import { CBox } from '@chakra-ui/vue'

export default {
  name: 'DashboardProfile',
  components: {
    CBox,
  },
  layout: 'dashboard',
  async asyncData({ $content }) {
    const dashboard = await $content('dashboard').fetch()
    return {
      dashboard,
    }
  },
  data() {
    return { modal: false }
  },
}
</script>
