import Vue from 'vue'
import App from './App.vue'
// import {Button} from '@/index'
import {Button, Input} from '../lib/index.js'
import '../lib/style/index.css'

Vue.config.productionTip = false
console.log('Wzw', Button)
Vue.use(Button)
Vue.use(Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
