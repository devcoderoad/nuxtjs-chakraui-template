<template>
  <CBox
    mt="6"
    mb="6"
    maxW="100%"
    :w="{
      base: 'var(--sizes-containers-xl)',
      md: 'var(--sizes-containers-md)',
      lg: 'var(--sizes-containers-md)',
      xl: 'var(--sizes-containers-xl)',
    }"
  >
    <CHeading textAlign="center" mx="auto" mb="4">{{ title }}</CHeading>
    <CBox
      mt="6"
      mb="6"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      pos="relative"
      overflow-x="auto"
      overflow-y="hidden"
      white-space="wrap"
    >
      <CBox
        v-for="item in items"
        :key="item.title.replace(' ', '')"
        my="4"
        py="2"
        mx="auto"
        d="flex"
      >
        <CBox
          maxW="xs"
          minH="160px"
          display="inline-block"
          w="xs"
          p="3"
          shadow="lg"
          m="2"
          rounded="lg"
          pos="relative"
          overflow="hidden"
          transition="0.5s ease"
          :_hover="{
            shadow: 'xl',
          }"
        >
          <CBox
            pos="relative"
            margin="-5em -5em 0 -5em"
            :_before="{
              content: '\' \'',
              bgImage:
                'linear-gradient(rgba(255 255 255 / 1%), var(--colors-gray-800))',
              w: '100%',
              h: '50%',
              bottom: 0,
              pos: 'absolute',
              zIndex: '1',
              transition: '0.5s ease',
            }"
            :_hover="{
              ':before': {
                h: '25%',
                bgImage:
                  'linear-gradient(rgba(255 255 255 / 1%), var(--colors-gray-800))',
              },
            }"
          >
            <CHeading
              color="white"
              fontWeight="bold"
              bottom="0"
              size="sm"
              margin="5em 5em 1em 5em"
              pos="absolute"
              zIndex="1"
              >{{ item.title }}</CHeading
            >
            <CImage
              pos="relative"
              zIndex="0"
              :src="item.image"
              :alt="item.title"
              my="8"
            />
          </CBox>
          <CBox as="p" fontSize="sm" mb="4">{{ item.description }}</CBox>
          <CButton
            variant-color="green"
            borderRadius="full"
            size="sm"
            pr="5"
            pl="4"
            shadow="lg"
            ><CIcon name="chevron-left" mr="1" /> View</CButton
          >
        </CBox>
      </CBox>
    </CBox>
    <CHeading size="xs" mt="2" textAlign="right"
      ><CLink :href="link">View all products</CLink></CHeading
    >
  </CBox>
</template>

<script>
import { CBox, CButton, CImage, CHeading, CLink, CIcon } from '@chakra-ui/vue'

export default {
  name: 'MOverflow',
  components: {
    CBox,
    CButton,
    CImage,
    CHeading,
    CLink,
    CIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Our Best Seller Products',
    },
    items: {
      type: Array,
      default: () => [
        {
          title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis cumque, animi pariatur dicta officiis.',
          image:
            'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=1035&w=1035&q=80',
        },
        {
          title: 'Deserunt aspernatur dicta distinctio hic quia!',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quas nemo perferendis expedita odit.',
          image:
            'https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80',
        },
        {
          title: 'Animi velit dolorum est quod facere ab possimus.',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, recusandae cumque. Nihil, quidem enim.',
          image:
            'https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=1035&q=80',
        },
        {
          title: 'Animi velit dolorum est quod facere ab possimus.',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, recusandae cumque. Nihil, quidem enim.',
          image:
            'https://images.unsplash.com/photo-1582726457394-afe6407d0996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=1035&q=80',
        },
        {
          title: 'Deserunt aspernatur dicta distinctio hic quia!',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere quaerat cum a provident.',
          image:
            'https://images.unsplash.com/photo-1587734361993-0033759da68b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&h=1036&q=80',
        },
        {
          title: 'Animi velit dolorum est quod facere ab possimus.',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla tenetur excepturi est eaque?',
          image:
            'https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=1024&q=80',
        },
        {
          title: 'Lorem, ipsum dolor sit harum, cupiditate aut.',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iure! Nihil provident, perferendis ducimus non vero eius quas nostrum animi incidunt architecto!',
          image:
            'https://images.unsplash.com/photo-1550731358-491ded4af838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80',
        },
        {
          title: 'Lorem, ipsum dolor sit consectetur adipisicing elit.',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iure! Nihil provident, perferendis ducimus non vero eius quas nostrum animi incidunt architecto!',
          image:
            'https://images.unsplash.com/photo-1587403090535-cbf88ede773a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&h=1036&q=80',
        },
      ],
    },
    link: {
      type: String,
      default: '/products',
    },
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
