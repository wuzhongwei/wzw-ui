<template>
  <div :class="inputClass">
    <input 
      class="wzw-input-inner"
      v-bind="$attrs"
      :type="type" 
      :value="value" 
      @input="input"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
    >
    <span 
      v-if="clearable"
      class="wzw-icon-guanbi" 
      @click="$emit('input', '')"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'wzw-input',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass () {
      let classes = ["wzw-input"]
      if (this.disabled) {
        classes.push(`is-disabled`)
      }
      if (this.clearable) {
        classes.push(`wzw-input-suffix`)
      }
      return classes
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted() {
  
  },
}
//给组件绑定事件都时候可以绑定不上，需要加修饰符@click.native给原生元素绑事件
//mousedown.native.prevent 阻止默认行为
</script>
<style lang="scss">
.wzw-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  
  &-inner{
    cursor: pointer;
    font-family: inherit;
    -webkit-appearance: none;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
    }
    &::placeholder {
      color: #C0C4CC;
    }
  }
  &.is-disabled &-inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  &-suffix {
    .wzw-icon-guanbi {
      position: absolute;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
      cursor: pointer;
    }
  }
}
</style>
