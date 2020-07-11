import Vue from 'vue'
import APP_CONFIG from './config'
import App from './app.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'
import Vuetify from './plugins/vuetify'
import ox from '@/plugins/ox'
import globalMixin from '@/mixins/global'
import faker from 'faker'

Vue.mixin(globalMixin)

Vue.mixin({
  beforeCreate () {
    faker.locale = APP_CONFIG.locale
    this.faker = faker
    this.APP_CONFIG = APP_CONFIG
  }
})

const vuetify = Vuetify(APP_CONFIG)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ox,
  vuetify,
  render: h => h(App)
}).$mount('#app')
