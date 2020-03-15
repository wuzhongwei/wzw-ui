<template>
  <div class="wzw-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wzw-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowStyle () {
      let style = {}
      if (this.gutter) {
        style = {
          ...style,
          marginLeft: -this.gutter/2 + 'px',
          marginRight: -this.gutter/2 + 'px',
        }
      }
      return style
    }
  },
  mounted() {
    this.$children.forEach(element => {
      element.gutter = this.gutter
    });
  }
}
</script>
<style lang="scss">
.wzw-row {
 display: flex;
 flex-wrap: wrap;
}
</style>