<template><div v-if="show"></div></template>
<script>
export default {
  name: 'MToast',
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    mode: {
      type: String,
      default: () => 'info',
    },
    title: {
      type: String,
      default: () => 'New Information',
    },
    description: {
      type: String,
      default: () => 'We have information for you',
    },
    position: {
      type: String,
      default: () => 'bottom',
    },
    time: {
      type: String,
      default: () => '5000',
    },
  },
  mounted() {
    return this.show
      ? this.$toast({
          title: this.title,
          description: this.description,
          status: this.mode,
          duration: Number(this.time),
          position: this.position,
        })
      : ''
  },
}
</script>
