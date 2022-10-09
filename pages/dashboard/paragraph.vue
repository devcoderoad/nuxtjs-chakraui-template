<template>
  <CBox>
    <CHeading>Paragraph</CHeading>
    <CDivider />
    <CStack :spacing="3">
      <CText fontSize="6xl">In love with Vue and Nuxt</CText>
      <CText fontSize="5xl">In love with Vue and Nuxt</CText>
      <CText fontSize="4xl">In love with Vue and Nuxt</CText>
      <CText fontSize="3xl">In love with Vue and Nuxt</CText>
      <CText fontSize="2xl">In love with Vue and Nuxt</CText>
      <CText fontSize="xl">In love with Vue and Nuxt</CText>
      <CText fontSize="lg">In love with Vue and Nuxt</CText>
      <CText fontSize="md">In love with Vue and Nuxt</CText>
      <CText fontSize="sm">In love with Vue and Nuxt</CText>
      <CText fontSize="xs">In love with Vue and Nuxt</CText>
    </CStack>
    <CDivider />
    <CHeading>Truncate</CHeading>
    <CDivider />
    <CText color="gray.500" is-truncated>
      “I was attracted to JavaScript because of the ability to just build
      something and share it instantly with the world. You put it on the web,
      and you get a URL, you can send it to anyone with a browser. That was the
      part that just attracted me to the web and to JavaScript.”
    </CText>
    <CDivider />
    <CHeading>Element</CHeading>
    <CStack :spacing="3">
      <CText as="i">Italic</CText>
      <CText as="u">Underline</CText>
      <CText as="abbr">I18N</CText>
      <CText as="cite">Citation</CText>
      <CText as="del">Deleted</CText>
      <CText as="em">Emphasis</CText>
      <CText as="ins">Inserted</CText>
      <CText as="kbd">Ctrl + C</CText>
      <CText as="mark">Highlighted</CText>
      <CText as="s">Strikethrough</CText>
      <CText as="samp">Sample</CText>
      <CText as="sub">sub</CText>
      <CText as="sup">sup</CText>
    </CStack>
    <CDivider />
    <CBox my="12">
      Mode: <code>{{ chakraColorMode }}</code>
    </CBox>
  </CBox>
</template>

<script>
import { CStack, CBox, CHeading, CText, CDivider } from '@chakra-ui/vue'
export default {
  name: 'DashboardParagraph',
  components: {
    CStack,
    CBox,
    CHeading,
    CText,
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
