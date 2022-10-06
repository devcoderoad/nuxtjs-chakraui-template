<template>
  <!-- <v-app id="error" dark> -->
  <CFlex justify="center" h="100vh">
    <CHeading v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </CHeading>
    <CHeading v-else>
      {{ otherError }}
    </CHeading>
    <CBox d="block">
      <NuxtLink to="/"> Home page </NuxtLink>
    </CBox>
  </CFlex>
  <!-- </v-app> -->
</template>

<script>
import { CBox, CFlex, CHeading } from '@chakra-ui/vue'

export default {
  name: 'EmptyLayout',
  components: {
    CBox,
    CFlex,
    CHeading,
    // CDivider,
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<!-- Styles -->
<!-- <style lang="scss" scoped>
@import '~/assets/scss/theme';
</style> -->
