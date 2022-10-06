<template>
  <CBox as="article">
    <!-- <CHeading color="brand.100">Heading 100 Brand</CHeading>
    <CHeading color="brand.300">Heading 300 Brand</CHeading>
    <CHeading color="brand.600">Heading 600 Brand</CHeading>
    <CHeading color="brand.900">Heading 900 Brand</CHeading>
    <CDivider />
    <CHeading color="secondary.100">Heading 100 Secondary</CHeading>
    <CHeading color="secondary.300">Heading 300 Secondary</CHeading>
    <CHeading color="secondary.600">Heading 600 Secondary</CHeading>
    <CHeading color="secondary.900" textShadow="sm"
      >Heading 900 Secondary</CHeading
    >
    <CDivider />
    Mode: <code>{{ chakraColorMode }}</code> -->
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
        <CHeading size="md">Cards</CHeading>
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
        <CHeading size="md">Cards</CHeading>
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
        <CHeading size="md">Cards</CHeading>
      </CBox>
    </CStack>
    <CDivider />
  </CBox>
</template>

<script>
import { CStack, CBox, CHeading, CDivider } from '@chakra-ui/vue'
export default {
  name: 'DashboardCharts',
  components: {
    CStack,
    CBox,
    CHeading,
    CDivider,
  },
  layout: 'dashboard',
  // data() {
  //   console.log(this)
  // },
  // head() {
  //   // console.log(this)
  // },
}
</script>
