<template>
  <main class="wzw-main">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'wzw-main'
}
</script>
<style lang="scss">
.wzw-main {
  flex: 1;
  padding: 20px;
}
</style>