import Vue from 'vue'
import App from './App.vue'
import WzwUi from '@/index'

Vue.config.productionTip = false

Vue.use(WzwUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
