import { mount, createLocalVue } from '@vue/test-utils'

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import CustomCard from '@/components/Example.vue'

const localVue = createLocalVue()

describe('HelloWorld.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = mount(CustomCard, {
      localVue,
      vuetify,
      propsData: {
        title: 'Foobar'
      }
    })

    // With jest we can create snapshot files of the HTML output
    // expect(wrapper.html()).toMatchSnapshot()

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find('.v-card__title > span')

    expect(title.text()).toBe('Foobar')
  })
})
