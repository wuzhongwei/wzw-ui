import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Col from './layout/col.vue'
import Row from './layout/row.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}
if (window.Vue) {
  install(Vue)
}

export default {
  install
}