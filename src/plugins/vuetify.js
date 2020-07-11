import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import fa from '../locale/fa'

Vue.use(Vuetify)

export default (APP_CONFIG) => {
  return new Vuetify({
    rtl: APP_CONFIG.rtl,
    theme: {
      dark: APP_CONFIG.darkTheme,
      themes: APP_CONFIG.themes
    },
    lang: {
      locales: { fa },
      current: APP_CONFIG.locale
    }
  })
}
