<template>
  <CBox as="article">
    <h1>Dashboard Page</h1>
    <nuxt-content :document="dashboard" />
    <MAlert
      mode="warning"
      title="Privacy Policy"
      description="We use cookies in our website, please do accept cookies from our website to experience more advanced features."
      :position="{ position: 'absolute', bottom: 0, left: 0, right: 0 }"
    />
  </CBox>
</template>
<script>
/* Chakra UI */
import { CBox } from '@chakra-ui/vue'
/* Components */
import MAlert from '~/components/alert/MAlert.vue'

export default {
  name: 'DashboardPage',
  components: {
    CBox,
    MAlert,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  layout: 'dashboard',
  async asyncData({ $content }) {
    const dashboard = await $content('dashboard').fetch()
    return {
      dashboard,
    }
  },
  data() {
    return { modal: false, heading: 'Dashboard' }
  },
}
</script>
