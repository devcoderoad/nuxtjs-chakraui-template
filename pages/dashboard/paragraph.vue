<template>
  <CBox>
    <CHeading color="brand.100">Heading 100 Brand</CHeading>
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
    Mode: <code>{{ chakraColorMode }}</code>
  </CBox>
</template>

<script>
import { CBox, CHeading, CDivider } from '@chakra-ui/vue'
export default {
  name: 'DashboardParagraph',
  components: {
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
