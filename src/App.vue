<template>
  <div id="app">
    <div class="row">
      <wzw-button>默认按钮</wzw-button>
      <wzw-button type="warning">警告按钮</wzw-button>
      <wzw-button type="danger">危险按钮</wzw-button>
      <wzw-button type="success">成功按钮</wzw-button>
      <wzw-button type="primary">主要按钮</wzw-button>
      <wzw-button type="info">信息按钮</wzw-button>
      <wzw-button type="info" icon="wode">信息</wzw-button>
      <wzw-button type="primary" icon="diqu" iconPosition="right">信息</wzw-button>
      <wzw-button type="primary" loading>信息</wzw-button>
      <wzw-button type="primary" @click="fn">信息222</wzw-button>
      <wzw-button type="warning">警告按钮 <i class="wzw-icon-wode"></i> </wzw-button>
    </div>
    <div class="row">
      <wzw-button round>默认按钮</wzw-button>
      <wzw-button type="warning" round>警告按钮</wzw-button>
      <wzw-button type="danger" round>危险按钮</wzw-button>
      <wzw-button type="success" round>成功按钮</wzw-button>
      <wzw-button type="primary" round>主要按钮</wzw-button>
      <wzw-button type="info" round>信息按钮</wzw-button>
    </div>
    <div class="row">
      <wzw-button icon="pan_icon" circle></wzw-button>
      <wzw-button icon="pan_icon" type="warning" circle></wzw-button>
      <wzw-button icon="pan_icon" type="danger" circle></wzw-button>
      <wzw-button icon="pan_icon" type="success" circle></wzw-button>
      <wzw-button icon="pan_icon" type="primary" circle></wzw-button>
      <wzw-button icon="pan_icon" type="info" circle></wzw-button>
    </div>
 
    <div class="row">
      <wzw-button disabled>默认按钮</wzw-button>
      <wzw-button type="warning" disabled>警告按钮</wzw-button>
      <wzw-button type="danger" disabled>危险按钮</wzw-button>
      <wzw-button type="success" disabled>成功按钮</wzw-button>
      <wzw-button type="primary" disabled>主要按钮</wzw-button>
      <wzw-button type="info" disabled>信息按钮</wzw-button>
    </div>
    <div class="row">
      <wzw-button-group>
        <wzw-button type="primary" icon="left" iconPosition="left">上一页</wzw-button>
        <wzw-button type="primary" icon="fenye-shangyiye" iconPosition="right">下一页</wzw-button>
      </wzw-button-group>
      <wzw-button-group>
        <wzw-button icon="pan_icon" type="primary"></wzw-button>
        <wzw-button icon="pan_icon" type="primary"></wzw-button>
        <wzw-button icon="pan_icon" type="primary"></wzw-button>
      </wzw-button-group>
    </div>
    <div class="row">
      <wzw-button type="text">文字按钮</wzw-button>
      <wzw-button type="text" disabled>文字按钮</wzw-button>
    </div>
     <div class="row">
      <wzw-button>默认按钮</wzw-button>
      <wzw-button size="medium">中等按钮</wzw-button>
      <wzw-button size="small">小型按钮</wzw-button>
      <wzw-button size="mini">超小按钮</wzw-button>
    </div>
    <div class="row">
      <wzw-button round>默认按钮</wzw-button>
      <wzw-button size="medium" round>中等按钮</wzw-button>
      <wzw-button size="small" round>小型按钮</wzw-button>
      <wzw-button size="mini" round>超小按钮</wzw-button>
    </div>
    <div class="row">
      <wzw-button nativeType="button" round>默认按钮</wzw-button>
      <wzw-button nativeType="submit" size="medium" round>中等按钮</wzw-button>
      <wzw-button nativeType="reset" size="small" round>小型按钮</wzw-button>
    </div>
   
    <!-- <wzw-icon icon="wode"></wzw-icon> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 100px;
  .wzw-button + .wzw-button {
    margin-left: 10px;
  }

  .row {
    margin-bottom: 10px;
  }
  .wzw-button-group {
    .wzw-button + .wzw-button {
      margin-left: 0;
    }
  }
  .wzw-button-group + .wzw-button-group {
    margin-left: 10px;
  }
}
</style>
