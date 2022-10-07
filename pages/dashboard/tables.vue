<template>
  <CBox as="article">
    <CHeading size="lg" color="primary">Tables Page</CHeading>
    <!-- <nuxt-content :document="dashboard" /> -->
    <table>
      <thead>
        <tr>
          <th>Title</th>
        </tr>
        <tr>
          <th>Description</th>
        </tr>
        <tr>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>One</td>
          <td>One Description</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Two</td>
          <td>Two Description</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Three</td>
          <td>Three Description</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>
  </CBox>
</template>

<script>
import { CBox, CHeading } from '@chakra-ui/vue'

export default {
  name: 'DashboardTables',
  components: {
    CBox,
    CHeading,
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
