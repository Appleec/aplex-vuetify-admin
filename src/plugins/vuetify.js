import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  theme: {
    disable: false,
    themes: {
      light: {
        primary: '#3f51b5'
      }
    }
  }
})
