<template>
  <CBox as="section">
    <MSeoHead
      title="Nuxt.js Chakra UI Dashboard Cards Page"
      description="List of Cards using Chakra UI components in Nuxt.js Admin Dashboard"
      image="/logo.png"
      url="https://dykraf.com"
    />
    <CBox
      w="100%"
      :display="['block', 'flex']"
      flexDirection="row"
      justifyContent="center"
    >
      <CBox
        shadow="md"
        p="5"
        mr="4"
        mb="4"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
        <CText as="p"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
          facere temporibus hic qui cumque. Hic qui, velit illum cum nisi culpa
          nesciunt.
        </CText>
      </CBox>
      <CBox
        shadow="md"
        p="5"
        mr="4"
        mb="4"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
        <CText as="p"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
          facere temporibus hic qui cumque. Hic qui, velit illum cum nisi culpa
          nesciunt.
        </CText>
      </CBox>
      <CBox
        shadow="md"
        p="5"
        mr="4"
        mb="4"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
        <CText as="p"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
          facere temporibus hic qui cumque. Hic qui, velit illum cum nisi culpa
          nesciunt.
        </CText>
      </CBox>
      <CBox
        shadow="md"
        p="5"
        mr="4"
        mb="4"
        height="100%"
        bg="gray.100"
        :width="[
          '100%', // base
          '50%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]"
      >
        <CHeading size="md" color="primary.100">Cards</CHeading>
        <CText as="p"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
          facere temporibus hic qui cumque. Hic qui, velit illum cum nisi culpa
          nesciunt.
        </CText>
      </CBox>
    </CBox>
    <Cbox>
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
    </Cbox>
  </CBox>
</template>

<script>
import {
  /* CGrid, */
  // CStack,
  CBox,
  CHeading,
  CText,
} from '@chakra-ui/vue'
import MSeoHead from '@/components/SeoHead'

export default {
  name: 'DashboardCharts',
  components: {
    // CGrid,
    // CStack,
    CBox,
    CHeading,
    CText,
    MSeoHead,
  },
  layout: 'dashboard',
  // data() {
  //   console.log(this)
  // },
  // head() {
  //   // console.log(this)
  // },
}
</script>
