<template>
  <section class="wzw-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'wzw-container',
  data () {
    return {
      isVertical: true
    }
  },
  mounted() {
    // console.log(this.$children)
    this.isVertical = this.$children.some((item) => {
      return ['wzw-footer', 'wzw-header'].indexOf(item.$options.name) != -1
    })
    console.log(this.isVertical)
  },
}
</script>
<style lang="scss">
.wzw-container {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.wzw-container.isVertical {
  flex-direction: column;
}

</style>