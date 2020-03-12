<template>
  <i :class="['iconfont',`wzw-icon-${icon}`]"></i>
</template>
<script>
import '../styles/icon.scss'
export default {
  name: 'wzw-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
.wzw-pulse {
  animation: spin 1s infinite steps(8);
}

</style>