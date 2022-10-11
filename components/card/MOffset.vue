<template>
  <CBox
    d="flex"
    wrap
    direction="row"
    justify-content="center"
    justify="center"
    mx="auto"
    my="12"
  >
    <CFlex
      v-if="cards && cards.length > 0"
      justify="center"
      alignItems="top"
      px="6"
      :direction="['column', 'row']"
    >
      <CBox
        v-for="item in cards"
        :key="item.id"
        :mx="{ base: 'auto', sm: 4, lg: 4, xl: 4 }"
        :p="[4, 6]"
        my="8"
        shadow="xl"
        border-width="1px"
        border-radius="10"
        :bgColor="colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.500'"
        :_hover="{
          bg: colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.600',
          shadow: 'lg',
        }"
        :w="{ md: '100%', xl: '33%' }"
      >
        <CFlex :direction="{ md: 'column', xl: 'row' }">
          <CBox
            rounded="lg"
            mt="-12"
            position="relative"
            :width="{ md: '100%', xl: '40%' }"
            height="100%"
            shadow="xl"
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
          <CBox :width="{ md: '100%', xl: '60%' }" ml="4">
            <CHeading size="lg" mb="3" :mt="[2, 4, 4, 0]">{{
              item.title
            }}</CHeading>
            <a
              v-chakra="{
                color: '#836940',
                fontSize: '.78rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                border: '1px solid',
                px: 2,
                py: 1,
                rounded: 'full',
                _hover: {
                  bgColor: '#836940',
                  color: 'white',
                  svg: {
                    color: 'white',
                  },
                },
              }"
              href="#"
            >
              <CIcon aria-label="Search database" name="tag" color="#836940" />
              {{ item.category }}
            </a>
            <CText as="p" :my="4" size="md">{{ item.subTitle }} </CText>
            <CHeading size="lg" textAlign="left"
              >${{ item.price }}
              <!-- <CBadge mx="1" px="1" variant-color="green">{{
                item.category
              }}</CBadge> -->
            </CHeading>
          </CBox>
        </CFlex>
        <CStack
          spacing="4"
          isInline
          my="6"
          justify="center"
          alignItems="center"
        >
          <CText color="gray.400" as="article">
            {{ item.description }}
          </CText>
          <CButton
            variant-color="orange"
            borderRadius="full"
            size="md"
            textTransform="uppercase"
            float="right"
            fontSize="sm"
            fontWeight="bolder"
            px="6"
          >
            Buy
          </CButton>
        </CStack>
      </CBox>
    </CFlex>
  </CBox>
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
  // CBadge,
  // CLink,
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
    // CBadge,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'See the Vue Brewd Caffe',
          subTitle: 'Vue makes front-end development a breeze.',
          price: 10,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis iste consectetur',
          image:
            'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80',
          category: 'Latte',
        },
        {
          id: 2,
          title: 'Brewd in the night, serve at the morning',
          subTitle: 'Vue makes front-end development a breeze.',
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
          subTitle: 'Vue makes front-end development a breeze.',
          price: 20,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis iste consectetur',
          image:
            'https://images.unsplash.com/photo-1594146971821-373461fd5cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80',
          category: 'Latte',
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
