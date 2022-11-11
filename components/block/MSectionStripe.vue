<template>
  <div
    v-if="items && items.length"
    v-chakra
    pos="relative"
    overflow="hidden"
    mt="12"
    mb="0"
  >
    <CBox
      v-for="(item, i) in items"
      :key="item.id"
      :w="[
        'full',
        'var(--sizes-containers-md)',
        'var(--sizes-containers-lg)',
        'var(--sizes-containers-xl)',
      ]"
      :mb="[16, 12]"
      mx="auto"
      :d="['block', 'flex']"
      pos="relative"
    >
      <CBox :px="[3]" :order="i % 2 === 0 ? 1 : 2">
        <CHeading>{{ item.title }}</CHeading>
        <CText
          as="p"
          mx="auto"
          color="gray.400"
          :my="[6, 9]"
          :w="[
            'full',
            'var(--sizes-containers-xs)',
            'var(--sizes-containers-sm)',
            'var(--sizes-containers-md)',
          ]"
        >
          {{ item.description }}
        </CText>
        <CButton
          my="2"
          variant-color="green"
          size="md"
          shadow="xl"
          borderRadius="full"
          >View</CButton
        >
      </CBox>
      <div
        v-chakra="{
          overFlow: 'hidden',
          position: 'relative',
          my: [2, 4],
          mx: 'auto',
          d: ['block', 'flex'],
          order: i % 2 === 0 ? 2 : 1,
          borderRadius: 'full',
          ':before, :after': {
            content: `' '`,
          },
          ':after': {
            bgColor: 'brown.100',
            position: 'absolute',
            top: '30px',
            bottom: '0',
            right: '0',
            left: '20px',
            width: '260px',
            height: '260px',
            maxWidth: '400px',
            mx: 'auto',
            zIndex: -1,
            borderRadius: 'full',
          },
        }"
      >
        <CImage
          borderRadius="full"
          boxSize="280"
          maxWidth="280"
          borderWidth="12px"
          borderColor="brown.600"
          alt="NuxtCha"
          mx="auto"
          :src="item.image"
          fallbackSrc="https://via.placeholder.com/400"
        />
      </div>
    </CBox>
  </div>
</template>

<script>
import { CBox, CButton, CHeading, CText } from '@chakra-ui/vue'

export default {
  name: 'MSectionStripe',
  components: {
    CBox,
    CButton,
    CHeading,
    CText,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Maintainable Product',
          description:
            'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Phosfluorescently engage worldwide methodologies with web-enabled technology. Dynamically innovate resource-leveling customer service for state of the art customer service.',
          image:
            'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80',
        },
        {
          id: 2,
          title: 'Experience the Sensation',
          description:
            'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust. Collaboratively administrate turnkey channels whereas virtual e-tailers.',
          image:
            'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80',
        },
        {
          id: 3,
          title: 'Growth Strategies',
          description:
            'Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources. Dramatically synthesize integrated schemas with optimal networks. Holistically pontificate installed base portals after maintainable products.',
          image:
            'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80',
        },
      ],
    }
  },
}
</script>
