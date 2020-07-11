import Vue from 'vue'
import Starter from '../components/starter.vue'

const loris = {
  install (Vue, options) {
    Vue.component('Starter', Starter)
  }
}

Vue.use(loris)
