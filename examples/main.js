import Vue from 'vue'
import App from './App.vue'
// import {Button} from '@/index'
import Wzw from '../src/index.js'

// import '../lib/style/index.css'

Vue.config.productionTip = false

Vue.use(Wzw)

new Vue({
  render: h => h(App),
}).$mount('#app')
