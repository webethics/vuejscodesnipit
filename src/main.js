import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
