<template>
  <div id="app">
    <!-- <div class="row">
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
    <h2>基础布局</h2>
    <wzw-row class="row">
      <wzw-col :span="24"><div class="grid-content bg-purple-dark"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row">
      <wzw-col :span="12"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="12"><div class="grid-content bg-purple-light"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row">
      <wzw-col :span="8"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="8"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="8"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row">
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple-light"></div></wzw-col>
    </wzw-row>
    <h2>分栏间隔</h2>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>

    <h2>混合布局</h2>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="16"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="8"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="8"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="8"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="16"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="4"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <h2>分栏偏移</h2>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row :gutter="20" class="row">
      <wzw-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <h2>对齐方式水平</h2>
    <wzw-row class="row-bg">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row-bg" align-h="center">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row-bg" align-h="end">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row-bg" align-h="space-between">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="row-bg" align-h="space-around">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <h2>对齐方式垂直</h2>
    <wzw-row class="h200" align-v="flex-start">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="h200" align-v="flex-end">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="h200" align-v="stretch">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="h200" align-v="baseline">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="h200" align-v="center">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <wzw-row class="h200" align-v="initial">
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :span="6"><div class="grid-content bg-purple"></div></wzw-col>
    </wzw-row>
    <h2>响应式布局</h2>
    <wzw-row :gutter="10">
      <wzw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></wzw-col>
      <wzw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></wzw-col>
      <wzw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></wzw-col>
    </wzw-row>
    <wzw-container>
      <wzw-header>Header</wzw-header>
      <wzw-main>Main</wzw-main>
    </wzw-container>

    <wzw-container>
      <wzw-header>Header</wzw-header>
      <wzw-main>Main</wzw-main>
      <wzw-footer>Footer</wzw-footer>
    </wzw-container>

    <wzw-container>
      <wzw-aside width="200px">Aside</wzw-aside>
      <wzw-main>Main</wzw-main>
    </wzw-container>

    <wzw-container>
      <wzw-header>Header</wzw-header>
      <wzw-container>
        <wzw-aside width="200px">Aside</wzw-aside>
        <wzw-main>Main</wzw-main>
      </wzw-container>
    </wzw-container>

    <wzw-container>
      <wzw-header>Header</wzw-header>
      <wzw-container>
        <wzw-aside width="200px">Aside</wzw-aside>
        <wzw-container>
          <wzw-main>Main</wzw-main>
          <wzw-footer>Footer</wzw-footer>
        </wzw-container>
      </wzw-container>
    </wzw-container>

    <wzw-container>
      <wzw-aside width="200px">Aside</wzw-aside>
      <wzw-container>
        <wzw-header>Header</wzw-header>
        <wzw-main>Main</wzw-main>
      </wzw-container>
    </wzw-container>

    <wzw-container>
      <wzw-aside width="200px">Aside</wzw-aside>
      <wzw-container>
        <wzw-header>Header</wzw-header>
        <wzw-main>Main</wzw-main>
        <wzw-footer>Footer</wzw-footer>
      </wzw-container>
    </wzw-container> -->
    <wzw-input 
      v-model="input"
      type="text"
    ></wzw-input>
   <wzw-input
    placeholder="请输入内容"
    v-model="input"
    :disabled="true">
  </wzw-input>
  <wzw-input
    placeholder="请输入内容"
    v-model="input"
    style="width:300px"
    clearable>
  </wzw-input>
  <wzw-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    show-password>
  </wzw-input>
  <wzw-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    prefix-icon="wzw-icon-diqu"
    >
  </wzw-input>
  <wzw-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    suffix-icon="wzw-icon-diqu">
  </wzw-input>
   slot 方式：
  <wzw-input
    placeholder="请选择日期"
    style="width: 180px;"
    v-model="input">
    <i slot="suffix" class="wzw-input__icon wzw-icon-diqu"></i>
  </wzw-input>
  <wzw-input
    placeholder="请输入内容"
    style="width: 180px;"
    v-model="input">
    <i slot="prefix" class="wzw-input__icon wzw-icon-diqu"></i>
  </wzw-input>
  <wzw-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="input">
  </wzw-input>
  <wzw-button>默认按钮</wzw-button>
   {{input}}
    <!-- <wzw-icon icon="wode"></wzw-icon> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    fn (e) {
      console.log(e)
    }
  },
  mounted() {
  },
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
   .wzw-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .wzw-col {
    border-radius: 4px;
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .h200 {
    height: 160px;
    background-color: rgba(255,0,0,.1);
    & + .h200 {
      margin-top: 20px;
    }
  }
}
.wzw-header, .wzw-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .wzw-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .wzw-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .wzw-container {
    margin-bottom: 40px;
  }
  
  .wzw-container:nth-child(5) .wzw-aside,
  .wzw-container:nth-child(6) .wzw-aside {
    line-height: 260px;
  }
  
  .wzw-container:nth-child(7) .wzw-aside {
    line-height: 320px;
  }
</style>
