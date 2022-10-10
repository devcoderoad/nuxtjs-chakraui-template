<template>
  <CButton
    v-bind="$props"
    :variant-color="isChecked ? 'red' : 'gray'"
    role="radio"
    :aria-checked="isChecked"
  >
    <slot />
  </CButton>
</template>

<script>
import { CButton } from '@chakra-ui/vue'

export default {
  name: 'MCustomRadio',
  components: {
    CButton,
  },
  props: {
    isChecked: Boolean,
    isDisabled: Boolean,
    value: {
      type: [String, Number],
      default: '',
    },
    mx: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
