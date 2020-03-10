import Button from './button'
import Icon from './icon'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
}
if (window.Vue) {
  install(Vue)
}

export default {
  install
}