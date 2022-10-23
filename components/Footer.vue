<template>
  <div>
    <CBox
      as="footer"
      mx="auto"
      my="12"
      px="4"
      :pt="[4, 6]"
      :pb="[6, 12]"
      :width="{
        xl: 'var(--sizes-containers-xl)',
      }"
    >
      <CBox
        :display="['inline-block', 'flex']"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        pos="relative"
      >
        <CBox>
          <CImage src="./logo.svg" alt="Brewd Logo" maxW="170px" />
          <CFlex>
            <CInput size="120" my="5" shadow="lg" />
            <CButton
              size="sm"
              variant-color="green"
              ml="2"
              shadow="lg"
              my="5"
              px="6"
              >Subscribe</CButton
            ></CFlex
          >
          <CBox>
            <CHeading size="xs">Follow Us</CHeading>
            <CButton shadow="lg" variant-color="blue">F</CButton>
            <CButton shadow="lg" variant-color="cyan">T</CButton>
            <CButton shadow="lg" variant-color="pink">P</CButton>
            <CButton shadow="lg" variant-color="red">Y</CButton>
          </CBox>
        </CBox>
        <CBox
          v-chakra="{
            'ul li': {
              listStyleType: 'none',
              marginLeft: '0rem',
            },
            a: {
              fontWeight: 'bolder',
              fontSize: 'sm',
            },
          }"
          :d="['flex']"
          :w="['100%', '40%']"
          :mt="[6, 0]"
          justifyContent="space-between"
          alignItems="top"
        >
          <CBox d="inline-block" w="full">
            <CHeading size="sm" mb="3">About Us</CHeading>
            <ul>
              <li><CLink href="#heading">History</CLink></li>
              <li><CLink href="#heading">Branches</CLink></li>
              <li><CLink href="#heading">Shop</CLink></li>
              <li><CLink href="#heading">Gallery</CLink></li>
              <li><CLink href="#heading">Careers</CLink></li>
              <li><CLink href="#heading">Barista</CLink></li>
              <li><CLink href="#heading">Contact Us</CLink></li>
            </ul>
          </CBox>
          <CBox d="inline-block" w="full">
            <CHeading size="sm" mb="3">Products</CHeading>
            <ul>
              <li><CLink href="#heading">Coffee Lattes</CLink></li>
              <li><CLink href="#heading">Green Coffee</CLink></li>
              <li><CLink href="#heading">Coffee Bean</CLink></li>
              <li><CLink href="#heading">Java Coffee</CLink></li>
              <li><CLink href="#heading">Robusta Coffee</CLink></li>
            </ul>
          </CBox>
        </CBox>
      </CBox>
    </CBox>
    <CBox mt="12" mb="6" mx="auto" textAlign="center">
      <p v-chakra fontSize="sm" color="gray.500">
        Copyright 2022 @ Brewd Company. All Right Reserved.
      </p>
    </CBox>
  </div>
</template>
<script>
export default {
  name: 'MFooter',
}
</script>
