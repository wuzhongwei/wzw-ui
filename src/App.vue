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
    <wzw-row>
      <wzw-col :span="12" style="background:red">12</wzw-col>
      <wzw-col :span="12" style="background:blue">12</wzw-col>
      <wzw-col :span="24" style="background:red">22222</wzw-col>
    </wzw-row>
    <wzw-row>
      <wzw-col style="background:red">24</wzw-col>
    </wzw-row>
    <wzw-row>
      <wzw-col :span="6" style="background:red">12</wzw-col>
      <wzw-col :span="6" :offset="12" style="background:blue">24</wzw-col>
    </wzw-row>
    <wzw-row>
      <wzw-col :span="6">
        <div class="box" style="background:red"></div>
      </wzw-col>
      <wzw-col :span="6"><div class="box"  style="background:blue"></div></wzw-col>
      <wzw-col :span="6"><div class="box"  style="background:red"></div></wzw-col>
      <wzw-col :span="6"><div class="box"  style="background:blue"></div></wzw-col>
    </wzw-row>
    <wzw-row :gutter="10">
      <wzw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></wzw-col>
    </wzw-row>

   
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
  .box {
    height: 30px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
