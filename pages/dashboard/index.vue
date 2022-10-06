<template>
  <CBox as="article">
    <!-- <h1 v-chakra :class="style" color="brand.100">Dashboard Page</h1> -->
    <h1 v-chakra color="brand.100" fontWeight="black">Dashboard Page</h1>
    <h2 v-chakra color="brand.300" fontWeight="black">Dashboard Page</h2>
    <h3 v-chakra color="brand.600" fontWeight="black">Dashboard Page</h3>
    <h4 v-chakra color="brand.900" fontWeight="black">Dashboard Page</h4>
    <CHeading color="secondary.100" fontWeight="black">Dashboard Page</CHeading>
    <CHeading color="secondary.300" fontWeight="black">Dashboard Page</CHeading>
    <CHeading color="secondary.600" fontWeight="black">Dashboard Page</CHeading>
    <CHeading color="secondary.900" fontWeight="black">Dashboard Page</CHeading>
    <nuxt-content :document="dashboard" />
    <MAlert
      mode="warning"
      title="Privacy Policy"
      description="We use cookies in our website, please do accept cookies from our website to experience more advanced features."
      :position="{ position: 'absolute', bottom: 0, left: 0, right: 0 }"
    />
    <MToast
      :show="true"
      mode="success"
      title="Welcome to Dashboard"
      description="Manage your users, content and settings"
      position="top-right"
      time="3000"
    />
  </CBox>
</template>
<script>
/* Chakra UI */
import { CBox, CHeading } from '@chakra-ui/vue'
/* Components */
import MAlert from '~/components/alert/MAlert.vue'
import MToast from '~/components/toast/MToast.vue'

export default {
  name: 'DashboardPage',
  components: {
    CBox,
    CHeading,
    MAlert,
    MToast,
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
    return { modal: false, heading: 'Dashboard', style: 'css`color: hotpink;`' }
  },
}
</script>
