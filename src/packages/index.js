import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
}
if (window.Vue) {
  install(Vue)
}

export default {
  install
}