<template>
  <svg class="wzw-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>
<script>
import '../styles/icon'
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
  .wzw-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
</style>