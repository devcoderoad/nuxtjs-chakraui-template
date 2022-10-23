<template>
  <div>
    <CBox
      :w="[
        'full',
        'var(--sizes-containers-md)',
        'var(--sizes-containers-lg)',
        'var(--sizes-containers-xl)',
      ]"
      my="12"
      mx="auto"
      :d="['block', 'flex']"
      pos="relative"
    >
      <CBox :px="[3, 6]">
        <CHeading>Welcome to Brewd </CHeading>
        <CText as="p" :my="[6, 9]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          expedita earum, dolor culpa ullam ut, molestias nesciunt, atque aut
          vero voluptatem. Fugiat est deleniti natus aspernatur ipsa laborum
          consectetur repudiandae delectus? Sapiente asperiores quibusdam nihil,
          totam necessitatibus velit quidem odio dolorem ad maiores fuga.
        </CText>
        <CHeading mt="4" size="sm"
          ><CButton
            variant-color="green"
            size="lg"
            shadow="xl"
            borderRadius="full"
            >Dashboard</CButton
          ></CHeading
        >
      </CBox>
      <div
        v-chakra="{
          overFlow: 'hidden',
          position: 'relative',
          mx: 'auto',
          my: [8, 4],
          borderRadius: 'full',
          ':before, :after': {
            content: `' '`,
          },
          ':after': {
            bgColor: 'blue.100',
            position: 'absolute',
            top: '50px',
            right: '50px',
            bottom: '50px',
            width: '300px',
            height: '300px',
            maxWidth: '400px',
            zIndex: -1,
            borderRadius: 'full',
          },
        }"
      >
        <CImage
          borderRadius="full"
          boxSize="320"
          maxWidth="320"
          borderWidth="12px"
          borderColor="blue.200"
          alt="NuxtCha"
          src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80"
          fallbackSrc="https://via.placeholder.com/400"
        />
      </div>
    </CBox>
    <CBox
      :w="[
        'full',
        'var(--sizes-containers-md)',
        'var(--sizes-containers-lg)',
        'var(--sizes-containers-xl)',
      ]"
      my="12"
      mx="auto"
      :d="['block', 'flex']"
      pos="relative"
    >
      <div
        v-chakra="{
          overFlow: 'hidden',
          position: 'relative',
          mx: 'auto',
          my: [8, 4],
          borderRadius: 'full',
          ':before, :after': {
            content: `' '`,
          },
          ':after': {
            bgColor: 'blue.100',
            position: 'absolute',
            top: '50px',
            right: '-25px',
            bottom: '50px',
            width: '300px',
            height: '300px',
            maxWidth: '400px',
            zIndex: -1,
            borderRadius: 'full',
          },
        }"
      >
        <CImage
          borderRadius="full"
          boxSize="320"
          maxWidth="320"
          borderWidth="12px"
          borderColor="blue.200"
          alt="NuxtCha"
          src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80"
          fallbackSrc="https://via.placeholder.com/400"
        />
      </div>
      <CBox :px="[3, 6]" ml="8">
        <CHeading>Welcome to Brewd </CHeading>
        <CText as="p" :my="[6, 9]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          expedita earum, dolor culpa ullam ut, molestias nesciunt, atque aut
          vero voluptatem. Fugiat est deleniti natus aspernatur ipsa laborum
          consectetur repudiandae delectus? Sapiente asperiores quibusdam nihil,
          totam necessitatibus velit quidem odio dolorem ad maiores fuga.
        </CText>
        <CHeading mt="4" size="sm"
          ><CButton
            variant-color="green"
            size="lg"
            shadow="xl"
            borderRadius="full"
            >Dashboard</CButton
          ></CHeading
        >
      </CBox>
    </CBox>
    <CBox
      :w="[
        'full',
        'var(--sizes-containers-md)',
        'var(--sizes-containers-lg)',
        'var(--sizes-containers-xl)',
      ]"
      my="12"
      mx="auto"
      :d="['block', 'flex']"
      pos="relative"
    >
      <CBox :px="[3, 6]">
        <CHeading>Welcome to Brewd </CHeading>
        <CText as="p" :my="[6, 9]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          expedita earum, dolor culpa ullam ut, molestias nesciunt, atque aut
          vero voluptatem. Fugiat est deleniti natus aspernatur ipsa laborum
          consectetur repudiandae delectus? Sapiente asperiores quibusdam nihil,
          totam necessitatibus velit quidem odio dolorem ad maiores fuga.
        </CText>
        <CHeading mt="4" size="sm"
          ><CButton
            variant-color="green"
            size="lg"
            shadow="xl"
            borderRadius="full"
            >Dashboard</CButton
          ></CHeading
        >
      </CBox>
      <div
        v-chakra="{
          overFlow: 'hidden',
          position: 'relative',
          mx: 'auto',
          my: [8, 4],
          borderRadius: 'full',
          ':before, :after': {
            content: `' '`,
          },
          ':after': {
            bgColor: 'blue.100',
            position: 'absolute',
            top: '50px',
            right: '50px',
            bottom: '50px',
            width: '300px',
            height: '300px',
            maxWidth: '400px',
            zIndex: -1,
            borderRadius: 'full',
          },
        }"
      >
        <CImage
          borderRadius="full"
          boxSize="320"
          maxWidth="320"
          borderWidth="12px"
          borderColor="blue.200"
          alt="NuxtCha"
          src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=980&q=80"
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
}
</script>
