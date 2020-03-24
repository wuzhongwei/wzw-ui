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
    child.forEach(element => {
      console.assert(element.tagName === 'BUTTON', '子元素必须为Button')
    });
  },
}
</script>
<style lang="scss">
  @import 'styles/button-group.scss';
</style>