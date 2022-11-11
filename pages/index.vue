<template>
  <CBox d="block" pos="relative">
    <CBox as="section" d="block" pos="relative">
      <CBox
        d="block"
        w="100%"
        h="100vh"
        bgImage="https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=920&q=80"
        bgRepeat="no-repeat"
        bgPosition="top center"
        bgSize="cover"
        pos="relative"
        zIndex="0"
        :_before="{
          content: '\' \'',
          position: 'absolute',
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'none',
          overflow: 'hidden',
          bgColor: 'rgba(0, 0, 0, 0.40)',
          // bgImage:
          //   'linear-gradient(rgba(255 255 255 / 1%), var(--colors-gray-900))',
        }"
      >
        <CBox
          d="block"
          mx="auto"
          pos="absolute"
          bottom="10"
          right="10"
          left="0"
          zIndex="1"
          textAlign="right"
          :w="{
            md: 'var(--sizes-containers-sm)',
            xl: 'var(--sizes-containers-xl)',
          }"
        >
          <CHeading mb="4" color="white" size="2xl" m="0" p="0">
            ⚡️ Hello chakra-ui/vue
          </CHeading>
          <CHeading size="xl" color="white" m="0" p="0"
            >Latte One Brewd</CHeading
          >
          <CText color="white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vero
            adipisci odit voluptates deleniti! Aliquam quod nisi facilis illo,
            deleniti sed vel.
          </CText>
        </CBox>
      </CBox>
    </CBox>
    <CFlex
      justify="center"
      direction="column"
      align="center"
      flex="wrap"
      my="12"
    >
      <MSectionStripe />
      <CBox
        :my="[6, 12]"
        py="8"
        :w="{
          md: 'var(--sizes-containers-sm)',
          xl: 'var(--sizes-containers-xl)',
        }"
      >
        <CHeading
          size="xl"
          textAlign="center"
          pos="relative"
          my="16"
          :_before="{
            content: '\'\'',
            position: 'absolute',
            width: '10%',
            height: '3px',
            bgColor: '#836940',
            bottom: '-12px',
            zIndex: 1,
          }"
          >Responsive Brewd Latte</CHeading
        >
        <MCardOffset />
      </CBox>
      <CBox
        pos="relative"
        :_before="{
          pos: 'absolute',
          content: '\' \'',
          bgImg:
            'https://images.unsplash.com/photo-1540965555-ef9a836372ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&h=480&q=80',
          bgRepeat: 'no-repeat',
          bgPosition: 'right bottom',
          opacity: '.25',
          w: 'full',
          h: 'full',
          right: '0',
          bottom: '0',
          zIndex: '-1',
        }"
        :_after="{
          content: '\' \'',
          bgImg: 'linear-gradient(rgba(255 255 255 / 1%), #ffffff)',
          pos: 'absolute',
          h: '40%',
          w: '100%',
          bottom: '0',
          zIndex: '-1',
        }"
      >
        <CBox
          :w="{
            md: 'var(--sizes-containers-sm)',
            lg: 'var(--sizes-containers-lg)',
            xl: 'var(--sizes-containers-xl)',
          }"
          :my="[6, 12]"
        >
          <CHeading
            mb="8"
            my="16"
            pos="relative"
            textAlign="center"
            :_before="{
              content: '\' \'',
              position: 'absolute',
              width: '10%',
              height: '3px',
              backgroundColor: '#836940',
              bottom: '-12px',
              zIndex: 1,
            }"
          >
            Our Coffee Philosophy
          </CHeading>
          <CBox
            w="full"
            d="flex"
            :flexDirection="['column', 'row']"
            alignItems="top"
            py="6"
          >
            <CBox :w="['100%', '50%']" align="center" :mr="[2, 4]" mb="12">
              <CImage
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=1024&q=80"
                mx="auto"
                :maxW="['90%']"
                shadow="xl"
                rounded="lg"
              />
              <CBox
                as="blockquote"
                my="9"
                mx="auto"
                :maxW="['90%']"
                fontStyle="italic"
                fontFamily="heading"
                fontWeight="black"
                fontSize="lg"
                color="gray.400"
              >
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
                <cite> - Lorem ipsum Dolor</cite>
              </CBox>
            </CBox>
            <CBox :w="['100%', '50%']" p="4">
              <CHeading size="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum.
              </CHeading>
              <CBox as="p" my="9">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </CBox>
              <CHeading size="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum.
              </CHeading>
              <CBox as="p" my="9">
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas. Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </CBox>
              <CHeading size="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum.
              </CHeading>
              <CBox as="p" my="9">
                Synergistically evolve 2.0 technologies rather than just in time
                initiatives. Quickly deploy strategic networks with compelling
                e-business. Credibly pontificate highly efficient manufactured
                products and enabled data.
              </CBox>
            </CBox>
          </CBox>
        </CBox>
      </CBox>
      <CBox
        h="100%"
        my="24"
        w="100%"
        mx="auto"
        overflow="hidden"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
        bgImg="https://images.unsplash.com/photo-1618105965240-9aa565e73a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1152&q=80"
      >
        <CBox :w="['full']" m="0" py="12" mx="auto">
          <CBox :w="['auto', '2xl']" :mx="['4', 'auto']">
            <CText
              fontWeight="black"
              :fontSize="['lg', 'xl']"
              mx="auto"
              :my="[5, 10]"
              color="whiteAlpha.800"
              >Quickly communicate enabled technology and turnkey leadership
              skills. Uniquely enable accurate supply chains rather than
              frictionless technology</CText
            ></CBox
          >
        </CBox>
      </CBox>
      <MOverflow />
      <CBox
        :w="{
          md: 'var(--sizes-containers-sm)',
          xl: 'var(--sizes-containers-xl)',
        }"
        :my="[6, 12]"
      >
        <CHeading textAlign="center" mx="auto" :mb="[2, 4]"
          >Our Customer Testimonials</CHeading
        >
        <CBox textAlign="center">
          <CHeading size="md"
            >Objectively integrate emerging core competencies before
            process-centric communities.
          </CHeading>
        </CBox>
      </CBox>
    </CFlex>
    <CBox
      mx="auto"
      :py="[3, 6]"
      :d="['block', 'flex']"
      :w="{
        md: 'var(--sizes-containers-sm)',
        lg: 'var(--sizes-containers-lg)',
        xl: 'var(--sizes-containers-xl)',
      }"
    >
      <CBox :w="['100%', '50%']" align="center" :mr="[2, 4]" mb="12">
        <CImage
          shadow="xl"
          :rounded="['none', 'lg']"
          src="https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80"
          alt="Brewd Logo"
          mx="auto"
          :maxW="['90%']"
        />
      </CBox>
      <CBox :w="['100%', '50%']" p="4">
        <CHeading size="md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          delectus nemo.
        </CHeading>
        <CBox as="p" my="4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          aperiam! Laborum qui dolor quae rem accusantium aliquid, facere iusto
          quia reprehenderit! Autem, ipsam eveniet. Aut harum dolores id dolore?
          Repellendus, dolore? Eveniet numquam nulla nisi, fugit omnis qui
          facere iusto, quam enim aliquam consequuntur.
        </CBox>
        <CHeading size="md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          delectus nemo.
        </CHeading>
        <CBox as="p" my="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          veritatis dignissimos adipisci sint facere at itaque, doloremque
          ducimus! Dolor porro illum laborum, earum aliquam repudiandae quae
          saepe voluptate, eaque animi corrupti veniam vel dolorum dicta est.
          Iste aliquam quos officia ad. Corporis, adipisci consequatur!
        </CBox>
        <CButton variant-color="green" px="6" borderRadius="full" shadow="xl"
          >View</CButton
        >
      </CBox>
    </CBox>
    <MFooter @toggleColorMode="toggleColorMode" />
  </CBox>
</template>

<script>
import { CBox, CButton, CFlex, CHeading, CText } from '@chakra-ui/vue'

/* Images */
import logo from '@/static/logo.svg'

/* Components */
import MSectionStripe from '@/components/block/MSectionStripe'
import MCardOffset from '@/components/card/MOffset'
import MOverflow from '@/components/card/MOverflow'
import MFooter from '@/components/Footer'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
    CText,
    MSectionStripe,
    MCardOffset,
    MOverflow,
    MFooter,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  layout: 'default',
  data() {
    return {
      showModal: false,
      logo,
    }
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
    },
  },
  methods: {
    showToast() {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    },
  },
}
</script>
