<template>
  <aside class="wzw-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'wzw-aside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>