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
  @import '../../styles/_val.scss';
  .wzw-button-group {
    display: inline-flex;
    vertical-align: middle;
    button {
      border-radius: 0;
      position: relative;
      &:first-child {
        border-right-color: hsla(0,0%,100%,.5);
      }
      &:last-child {
        border-left-color: hsla(0,0%,100%,.5);
      }
      &:not(:first-child):not(:last-child) {
        border-left-color: hsla(0,0%,100%,.5);
        border-right-color: hsla(0,0%,100%,.5);
      }
      &:not(first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover, :focus {
        z-index: 1;
      }
    }
  }
</style>