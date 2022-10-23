<template>
  <CFlex
    v-if="cards && cards.length > 0"
    justify="center"
    alignItems="top"
    :py="[3, 8]"
    :px="[3, 6]"
    :direction="['column', 'row']"
  >
    <CBox
      v-for="item in cards"
      :key="item.id"
      :mx="{ base: 'auto', sm: 4, lg: 4, xl: 4 }"
      :p="[4, 6]"
      my="8"
      pos="relative"
      shadow="xl"
      border-width="1px"
      border-radius="10"
      :bgColor="colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.500'"
      :_hover="{
        bg: colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.600',
        shadow: 'lg',
      }"
      :w="{ md: '100%', xl: '33%' }"
      :_before="{
        content: '\' \'',
        pos: 'absolute',
        top: '.5rem',
        right: '.5rem',
        w: '25px',
        h: '25px',
        bgColor: 'whiteAlpha.200',
        border: '2px solid #cdcdcd',
        opacity: '0.35',
        transform: 'rotate(-40deg) translate(2px,2px)',
        borderRadius: '50%',
        zIndex: '0',
      }"
    >
      <CFlex
        :direction="{ md: 'column', xl: 'row' }"
        :_before="{
          content: '\' \'',
          position: 'absolute',
          bottom: 0,
          left: 0,
          w: '80px',
          h: '80px',
          transform: 'rotate(-40deg) scale(1)',
          borderRadius: '50%',
          opacity: '0.35',
          backgroundImage:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC)',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'scroll',
          zIndex: 0,
        }"
      >
        <CBox
          rounded="lg"
          mt="-12"
          position="relative"
          :width="{ md: '100%', xl: '40%' }"
          height="100%"
          shadow="xl"
          pos="relative"
          :_after="{
            transition: 'all .3s ease',
            content: `' '`,
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 25,
            right: -30,
            backgroundImage: `url('https://via.placeholder.com/230')`,
            filter: 'blur(15px)',
            zIndex: -1,
          }"
          :_groupHover="{
            ':_after': {
              filter: 'blur(200px)',
            },
          }"
        >
          <CImage
            rounded="lg"
            height="230px"
            htmlWidth="230px"
            htmlHeight="230px"
            objectFit="cover"
            fallback-src="https://via.placeholder.com/230"
            :width="{ md: '100%', xl: '230px' }"
            :alt="item.title"
            :src="item.image"
          />
        </CBox>
        <CBox :width="{ md: '100%', xl: '60%' }" :ml="[4, 0, 0, 6]">
          <CHeading
            :fontSize="['md', 'lg', 'lg', 'xl']"
            mb="3"
            :mt="[2, 4, 4, 0]"
            >{{ item.title }}</CHeading
          >
          <a
            v-chakra="{
              color: 'var(--color-primary)',
              fontSize: '.78rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              border: '1px solid',
              px: 2,
              py: 1,
              rounded: 'full',
              _hover: {
                bgColor: 'var(--colors-primary)',
                color: 'var(--colors-white)',
                // svg: {
                //   color: 'white',
                // },
              },
            }"
            href="#"
          >
            <CIcon
              aria-label="Search database"
              name="tag"
              color="var(--color-primary)"
            />
            {{ item.category }}
          </a>
          <CText as="p" :my="4" fontSize="sm" color="gray.400"
            >{{ item.subTitle }}
          </CText>
          <CHeading size="lg" textAlign="left">${{ item.price }} </CHeading>
        </CBox>
      </CFlex>
      <CStack spacing="4" isInline my="6" justify="center" alignItems="center">
        <CText color="gray.400" as="article" pos="relative" zIndex="1">
          {{ item.description }}
        </CText>
        <CButton
          variant-color="green"
          borderRadius="full"
          size="md"
          textTransform="uppercase"
          float="right"
          fontSize="sm"
          fontWeight="bolder"
          px="8"
          py="0"
          left-icon="cart-plus"
        >
          <CText ml="1">Buy</CText>
        </CButton>
      </CStack>
    </CBox>
  </CFlex>
</template>

<script>
import {
  CFlex,
  CBox,
  CButton,
  CImage,
  CStack,
  CHeading,
  CText,
  CIcon,
} from '@chakra-ui/vue'

export default {
  name: 'MOffset',
  components: {
    CFlex,
    CBox,
    CButton,
    CImage,
    CStack,
    CHeading,
    CText,
    CIcon,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'See the Vue Brewd Caffe',
          subTitle: 'A mixed of roasted robusta beans with fresh milk',
          price: 10,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis iste consectetur',
          image:
            'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80',
          category: 'Capucino',
        },
        {
          id: 2,
          title: 'Brewd in the night, serve at the morning',
          subTitle: 'Fresh morning blend mixed',
          price: 30,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis iste consectetur',
          image:
            'https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80',
          category: 'Latte',
        },
        {
          id: 3,
          title: 'Hrvest Morning Blend Latte',
          subTitle: 'Coffee bean with Hazelnut',
          price: 20,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis iste consectetur',
          image:
            'https://images.unsplash.com/photo-1594146971821-373461fd5cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80',
          category: 'Hazelnut',
        },
      ],
    }
  },
  computed: {
    colorMode() {
      return this.chakraColorMode
    },
  },
}
</script>
