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
import Server from '@/plugins/server'
import GetToken from '@/plugins/gettoken'
import PortalVue from 'portal-vue'
import Filters from '@/filters'

Vue.mixin(globalMixin)
Vue.use(PortalVue)
Filters(APP_CONFIG)

window.CURRENT_USER_ROLE = 'ADMIN'

Vue.mixin({
  beforeCreate () {
    faker.locale = APP_CONFIG.locale
    this.faker = faker
    this.APP_CONFIG = APP_CONFIG
  }
})

// NOTE: add route before hooks here
router.beforeEach((to, from, next) => {
  next()
})

const vuetify = Vuetify(APP_CONFIG)

const token = GetToken()

const requestInterceptor = (config) => {
  console.log('request interceptor')
  return config
}

const responseInterceptor = (response) => {
  console.log('response interceptor')
  return response
}

const server = Server(APP_CONFIG, token, requestInterceptor, responseInterceptor)

window.SERVER = server
window.APP_CONFIG = APP_CONFIG

store.server = server

Vue.server = server

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ox,
  vuetify,
  render: h => h(App)
}).$mount('#app')
