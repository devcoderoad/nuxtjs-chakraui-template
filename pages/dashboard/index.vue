<template>
  <CBox as="article" mb="24">
    <CBox mx="auto" mb="12" :display="['block', 'flex']">
      <CBox :w="['100%', '33.3%']" pr="6" mt="3">
        <CHeading>Welcome to Nuxtify</CHeading>
        <CText as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          explicabo quisquam necessitatibus ut quae impedit, eaque nemo illo,
          dignissimos architecto vitae atque cupiditate officiis placeat
          quibusdam distinctio sint! Amet, ad, tempora, tempore consectetur
          error optio delectus magni molestiae perferendis assumenda dolorum
          fugiat sit minima.
        </CText>
      </CBox>
      <CBox :w="['100%', '66.6%']" :px="[0, 6]">
        <CSimpleGrid
          :columns="[1, 2, 4]"
          :spacing="['20px', '30px']"
          mx="auto"
          mt="6"
          mb="24"
        >
          <CBox
            :_hover="{ shadow: 'xl' }"
            borderWidth="1px"
            overflow="hidden"
            shadow="lg"
            p="5"
            rounded="lg"
            :maxW="['xxl', 'md']"
            ><CImage
              mb="8"
              borderRadius="full"
              borderWidth="12px"
              borderColor="gray.200"
              alt="NuxtCha"
              src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <CBox d="flex" align-items="baseline">
              <CBadge rounded="full" px="2" variant-color="green"> Up </CBadge>
              <CBox
                color="gray.500"
                font-weight="semibold"
                letter-spacing="wide"
                font-size="xs"
                text-transform="uppercase"
                ml="2"
              >
                +30% &raquo; 60%
              </CBox>
            </CBox>
            <CBox
              mt="1"
              font-weight="semibold"
              as="h4"
              line-height="tight"
              is-truncated
            >
              Modern home in city
            </CBox>
            <CBox>
              $1,900.00 / wk
              <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
            </CBox>
          </CBox>
          <CBox
            :_hover="{ shadow: 'xl' }"
            borderWidth="1px"
            overflow="hidden"
            shadow="lg"
            p="5"
            rounded="lg"
            :maxW="['xxl', 'md']"
            ><CImage
              mb="8"
              borderRadius="full"
              borderWidth="12px"
              borderColor="gray.200"
              alt="NuxtCha"
              src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <CBox d="flex" align-items="baseline">
              <CBadge rounded="full" px="2" variant-color="orange">
                Down
              </CBadge>
              <CBox
                color="gray.500"
                font-weight="semibold"
                letter-spacing="wide"
                font-size="xs"
                text-transform="uppercase"
                ml="2"
              >
                -10% &raquo; 80%
              </CBox>
            </CBox>
            <CBox
              mt="1"
              font-weight="semibold"
              as="h4"
              line-height="tight"
              is-truncated
            >
              Modern home in city
            </CBox>
            <CBox>
              $1,900.00 / wk
              <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
            </CBox>
          </CBox>
          <CBox
            :_hover="{ shadow: 'xl' }"
            borderWidth="1px"
            overflow="hidden"
            shadow="lg"
            p="5"
            rounded="lg"
            :maxW="['xxl', 'md']"
          >
            <CImage
              mb="8"
              borderRadius="full"
              borderWidth="12px"
              borderColor="gray.200"
              alt="NuxtCha"
              src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <CBox d="flex" align-items="baseline">
              <CBadge rounded="full" px="2" variant-color="green"> Up </CBadge>
              <CBox
                color="gray.500"
                font-weight="semibold"
                letter-spacing="wide"
                font-size="xs"
                text-transform="uppercase"
                ml="2"
              >
                3 beds &bull; 2 baths
              </CBox>
            </CBox>
            <CBox
              mt="1"
              font-weight="semibold"
              as="h4"
              line-height="tight"
              is-truncated
            >
              Modern home in city
            </CBox>
            <CBox>
              $1,900.00 / wk
              <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
            </CBox>
          </CBox>
          <CBox
            :_hover="{ shadow: 'xl' }"
            borderWidth="1px"
            overflow="hidden"
            shadow="lg"
            p="5"
            rounded="lg"
            :maxW="['xxl', 'md']"
          >
            <CImage
              mb="8"
              borderRadius="full"
              borderWidth="12px"
              borderColor="gray.200"
              alt="NuxtCha"
              src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <CBox d="flex" align-items="baseline">
              <CBadge rounded="full" px="2" variant-color="green"> Up </CBadge>
              <CBox
                color="gray.500"
                font-weight="semibold"
                letter-spacing="wide"
                font-size="xs"
                text-transform="uppercase"
                ml="2"
              >
                3 beds &bull; 2 baths
              </CBox>
            </CBox>
            <CBox
              mt="1"
              font-weight="semibold"
              as="h4"
              line-height="tight"
              is-truncated
            >
              Modern home in city
            </CBox>
            <CBox>
              $1,900.00 / wk
              <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
            </CBox>
          </CBox>
        </CSimpleGrid>
      </CBox>
    </CBox>
    <CBox>
      <CSimpleGrid
        :columns="[1, 2, 3, 4]"
        :spacing="['20px', '40px']"
        mx="auto"
        mt="12"
        mb="24"
      >
        <CBox
          :_hover="{ shadow: 'xl' }"
          borderWidth="1px"
          overflow="hidden"
          shadow="lg"
          p="10"
          rounded="lg"
          :maxW="['xxl', 'md']"
          ><CImage
            mb="8"
            borderRadius="full"
            borderWidth="12px"
            borderColor="gray.200"
            alt="NuxtCha"
            src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <CBox d="flex" align-items="baseline">
            <CBadge rounded="full" px="2" variant-color="green"> New </CBadge>
            <CBox
              color="gray.500"
              font-weight="semibold"
              letter-spacing="wide"
              font-size="xs"
              text-transform="uppercase"
              ml="2"
            >
              3 beds &bull; 2 baths
            </CBox>
          </CBox>
          <CBox
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            Modern home in city center in the heart of historic Los Angeles
          </CBox>
          <CBox>
            $1,900.00 / wk
            <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
          </CBox>
        </CBox>
        <CBox
          :_hover="{ shadow: 'xl' }"
          borderWidth="1px"
          overflow="hidden"
          shadow="lg"
          p="10"
          rounded="lg"
          :maxW="['xxl', 'md']"
          ><CImage
            mb="8"
            borderRadius="full"
            borderWidth="12px"
            borderColor="gray.200"
            alt="NuxtCha"
            src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <CBox d="flex" align-items="baseline">
            <CBadge rounded="full" px="2" variant-color="green"> New </CBadge>
            <CBox
              color="gray.500"
              font-weight="semibold"
              letter-spacing="wide"
              font-size="xs"
              text-transform="uppercase"
              ml="2"
            >
              3 beds &bull; 2 baths
            </CBox>
          </CBox>
          <CBox
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            Modern home in city center in the heart of historic Los Angeles
          </CBox>
          <CBox>
            $1,900.00 / wk
            <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
          </CBox>
        </CBox>
        <CBox
          :_hover="{ shadow: 'xl' }"
          borderWidth="1px"
          overflow="hidden"
          shadow="lg"
          p="10"
          rounded="lg"
          :maxW="['xxl', 'md']"
        >
          <CImage
            mb="8"
            borderRadius="full"
            borderWidth="12px"
            borderColor="gray.200"
            alt="NuxtCha"
            src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <CBox d="flex" align-items="baseline">
            <CBadge rounded="full" px="2" variant-color="green"> New </CBadge>
            <CBox
              color="gray.500"
              font-weight="semibold"
              letter-spacing="wide"
              font-size="xs"
              text-transform="uppercase"
              ml="2"
            >
              3 beds &bull; 2 baths
            </CBox>
          </CBox>
          <CBox
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            Modern home in city center in the heart of historic Los Angeles
          </CBox>
          <CBox>
            $1,900.00 / wk
            <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
          </CBox>
        </CBox>
        <CBox
          :_hover="{ shadow: 'xl' }"
          borderWidth="1px"
          overflow="hidden"
          shadow="lg"
          p="10"
          rounded="lg"
          :maxW="['xxl', 'md']"
        >
          <CImage
            mb="8"
            borderRadius="full"
            borderWidth="12px"
            borderColor="gray.200"
            alt="NuxtCha"
            src="https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&h=960&q=80"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <CBox d="flex" align-items="baseline">
            <CBadge rounded="full" px="2" variant-color="green"> New </CBadge>
            <CBox
              color="gray.500"
              font-weight="semibold"
              letter-spacing="wide"
              font-size="xs"
              text-transform="uppercase"
              ml="2"
            >
              3 beds &bull; 2 baths
            </CBox>
          </CBox>
          <CBox
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            Modern home in city center in the heart of historic Los Angeles
          </CBox>
          <CBox>
            $1,900.00 / wk
            <CBox as="span" color="gray.600" fontSize="sm"> / wk </CBox>
          </CBox>
        </CBox>
      </CSimpleGrid>
    </CBox>
    <nuxt-content :document="dashboard" />
    <MAlert
      mode="warning"
      title="Privacy Policy"
      description="We use cookies in
    our website, please do accept cookies from our website to experience more
    advanced features."
      :position="{ position: 'fixed', bottom: 0, left: 0, right: 0 }"
    />
    <MToast
      :show="true"
      mode="success"
      title="Welcome to Dashboard"
      description="Manage your users, content and settings"
      position="top-right"
      time="3000"
    />
  </CBox>
</template>
<script>
/* Chakra UI */
import { CBox, CSimpleGrid, /* CHeading, */ CImage } from '@chakra-ui/vue'
/* Components */
import MAlert from '~/components/alert/MAlert.vue'
import MToast from '~/components/toast/MToast.vue'

export default {
  name: 'DashboardPage',
  components: {
    CBox,
    CSimpleGrid,
    // CHeading,
    CImage,
    MAlert,
    MToast,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  layout: 'dashboard',
  async asyncData({ $content }) {
    const dashboard = await $content('dashboard').fetch()
    return {
      dashboard,
    }
  },
  data() {
    return { modal: false, heading: 'Dashboard', style: 'css`color: hotpink;`' }
  },
}
</script>
