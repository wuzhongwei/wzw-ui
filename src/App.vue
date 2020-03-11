<template>
  <div id="app">
    <wzw-button>默认按钮</wzw-button>
    <wzw-button type="warning">警告按钮</wzw-button>
    <wzw-button type="danger">危险按钮</wzw-button>
    <wzw-button type="success">成功按钮</wzw-button>
    <wzw-button type="primary">主要按钮</wzw-button>
    <wzw-button type="info">信息按钮</wzw-button>
    <wzw-button type="info" icon="wode">信息</wzw-button>
    <wzw-button type="primary" icon="diqu" iconPosition="right">信息</wzw-button>
    <br>
    <wzw-button>默认按钮</wzw-button>
    <wzw-button type="warning">警告按钮</wzw-button>
    <wzw-button type="danger">危险按钮</wzw-button>
    <wzw-button type="success">成功按钮</wzw-button>
    <wzw-button type="primary">主要按钮</wzw-button>
    <wzw-button type="info">信息按钮</wzw-button>
    <wzw-button type="info" icon="wode">信息</wzw-button>
    <wzw-button type="primary" icon="diqu" iconPosition="right">信息</wzw-button>
    <!-- <wzw-icon icon="wode"></wzw-icon> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  margin: 100px;
  .wzw-button + .wzw-button {
    margin-left: 10px;
  }
}
</style>
