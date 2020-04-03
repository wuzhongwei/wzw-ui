import Button from '../packages/button'
// import Icon from './icon/icon.vue'
// import ButtonGroup from './button/button-group'
// import Col from './layout/col.vue'
// import Row from './layout/row.vue'
// import Container from './container/container.vue'
// import Aside from './container/aside.vue'
// import Footer from './container/footer.vue'
// import Header from './container/header.vue'
// import Main from './container/main.vue'

// import Input from '../packages/input'

const components = [
  Button,
  // Input
]

const install = (Vue) => {
  components.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
  // Vue.component(Button.name, Button)
  // Vue.component(Icon.name, Icon)
  // Vue.component(ButtonGroup.name, ButtonGroup)
  // Vue.component(Row.name, Row)
  // Vue.component(Col.name, Col)
  // Vue.component(Container.name, Container)
  // Vue.component(Aside.name, Aside)
  // Vue.component(Footer.name, Footer)
  // Vue.component(Header.name, Header)
  // Vue.component(Main.name, Main)
  // Vue.component(Input.name, Input)
}
if (window.Vue) {
  install(Vue)
}

export default {
  install,
  Button,
  // Input
}