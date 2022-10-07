<template>
  <CBox as="article">
    <MSeoHead
      title="Nuxt.js Chakra UI Dashboard Charts Page"
      description="List of Charts using Chakra UI components in Nuxt.js Admin Dashboard"
      image="/logo.png"
      url="https://dykraf.com"
    />
    <CStack spacing="10" isInline py="5" direction="row" justify="center">
      <CBox
        shadow="md"
        p="5"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
      </CBox>
      <CBox
        shadow="md"
        p="5"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
      </CBox>
      <CBox
        shadow="md"
        p="5"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
      </CBox>
    </CStack>
    <CDivider />
  </CBox>
</template>

<script>
import { CStack, CBox, CHeading, CDivider } from '@chakra-ui/vue'
import MSeoHead from '@/components/SeoHead'

export default {
  name: 'DashboardCharts',
  components: {
    CStack,
    CBox,
    CHeading,
    CDivider,
    MSeoHead,
  },
  // inject: ['$chakraColorMode', '$toggleColorMode', `$mode`],
  layout: 'dashboard',
  // data() {
  //   console.log(this)
  // },
  // methods: {
  //   $mmode(var1, var2) {
  //     return this.$mode(var1, var2)
  //   },
  // },
  // head() {
  // console.log(this.chakraColorMode)
  // console.log(this.$mode)
  // },

  // created() {
  //   this.mode = this.$mode
  // },
}
</script>
