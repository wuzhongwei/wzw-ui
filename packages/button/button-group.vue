<template>
  <div class="wzw-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wzw-button-group',
  mounted() {
    const child = this.$el.children
    for (let i = 0; i < child.length; i++) {
      console.assert(child[i].tagName === 'BUTTON', '子元素必须为Button')
    }
  },
}
</script>
<style lang="scss">
// @import "styles/button.scss";
</style>