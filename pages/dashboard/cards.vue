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
  </CBox>
</template>

<script>
import {
  /* CStack, */ /* CGrid, */ CBox,
  CHeading,
  CText,
} from '@chakra-ui/vue'
import MSeoHead from '@/components/SeoHead'

export default {
  name: 'DashboardCharts',
  components: {
    // CStack,
    // CGrid,
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
