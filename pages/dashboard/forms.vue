<template>
  <CBox as="article">
    <CHeading size="lg" color="primary" mb="6">Forms Page</CHeading>
    <!-- <nuxt-content :document="dashboard" /> -->
    <CFlex>
      <Cbox w="md" m="4">
        <form>
          <CFormControl>
            <CFormLabel for="email">Full Name</CFormLabel>
            <CInput id="fullname" type="text" name="fullname" />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="email">Email address</CFormLabel>
            <CInput
              id="email"
              type="email"
              name="email"
              aria-describedby="email-helper-text"
            />
            <CFormHelperText id="email-helper-text">
              We'll never share your email.
            </CFormHelperText>
          </CFormControl>
          <CFormControl>
            <CFormLabel or="message">Message</CFormLabel>
            <CTextarea
              id="message"
              type="textarea"
              name="message"
              placeholder="Your message to our company"
            />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="burger-type">Burger Type</CFormLabel>
            <CBox mb="3" w="300px">
              <CSelect
                id="burger-type"
                v-model="burgerType"
                placeholder="Select Burger"
              >
                <option value="grilled">Grilled Backyard Burger</option>
                <option value="pub-style">The Pub-Style Burger</option>
                <option value="jucy-lucy">The Jucy Lucy</option>
              </CSelect>
            </CBox>
          </CFormControl>
          <CFormControl>
            <CFormLabel for="custom-radio">Custom Radio</CFormLabel>
            <CRadioButtonGroup
              id="custom-radio"
              :value="value"
              is-inline
              spacing="4"
              @change="
                (e) => {
                  value = e
                }
              "
            >
              <MCustomRadio value="item-1" m="2">Custom Radio 1</MCustomRadio>
              <MCustomRadio value="item-2" m="2">Custom Radio 2</MCustomRadio>
              <MCustomRadio value="item-3" m="2">Custom Radio 3</MCustomRadio>
            </CRadioButtonGroup>
          </CFormControl>
          <CFormControl>
            <CFormLabel for="radio-select">Radio Select</CFormLabel>
            <CRadioGroup id="radio-select" isInline default-value="Sasuke">
              <CRadio value="Sasuke">Sasuke</CRadio>
              <CRadio value="Nagato">Nagato</CRadio>
            </CRadioGroup>
          </CFormControl>
          <CFormControl>
            <CFormLabel for="radio-select">Radio Select</CFormLabel>
            <CCheckboxGroup
              variant-color="green"
              :default-value="['naruto', 'kakashi', 'sasuke']"
              spacing="10"
              isInline
            >
              <CCheckbox
                size="sm"
                variant-color="red"
                default-is-checked
                value="naruto"
              >
                Checkbox
              </CCheckbox>
              <CCheckbox size="md" variant-color="green" value="kakashi">
                Checkbox
              </CCheckbox>
              <CCheckbox size="lg" variant-color="pink" value="sasuke">
                Checkbox
              </CCheckbox>
            </CCheckboxGroup>
          </CFormControl>
        </form>
      </Cbox>
      <CBox w="md" m="4">
        <form>
          <CFormControl>
            <CFormLabel for="fullname">Full Name</CFormLabel>
            <CInput id="fullname" type="text" name="fullname" />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="email">Email</CFormLabel>
            <CInput id="fullname" type="text" name="email" />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="phone">Phone</CFormLabel>
            <CInput id="phone" type="text" name="phone" />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="company">Company</CFormLabel>
            <CInput id="company" type="text" name="company" />
          </CFormControl>
          <CFormControl>
            <CFormLabel for="address">Address</CFormLabel>
            <CTextarea
              id="address"
              type="textarea"
              name="address"
              placeholder="Your address"
            />
          </CFormControl>
          <CButton type="submit" color="red" mt="4">Submit</CButton>
        </form>
      </CBox>
    </CFlex>
  </CBox>
</template>

<script>
import {
  CFlex,
  CBox,
  CHeading,
  CButton,
  CFormControl,
  CFormLabel,
  CInput,
  CSelect,
  CFormHelperText,
  CTextarea,
  CRadioGroup,
  CRadio,
  CRadioButtonGroup,
  CCheckbox,
  CCheckboxGroup,
} from '@chakra-ui/vue'

import MCustomRadio from '@/components/form/MCustomRadio'

export default {
  name: 'DashboardTables',
  components: {
    CFlex,
    CBox,
    CHeading,
    CButton,
    CFormControl,
    CFormLabel,
    CInput,
    CSelect,
    CTextarea,
    CFormHelperText,
    CRadioGroup,
    CRadio,
    CRadioButtonGroup,
    CCheckbox,
    CCheckboxGroup,
    MCustomRadio,
  },
  layout: 'dashboard',
  async asyncData({ $content }) {
    const dashboard = await $content('dashboard').fetch()
    return {
      dashboard,
    }
  },
  data() {
    return { modal: false, value: 'item-1', burgerType: '' }
  },
}
</script>
