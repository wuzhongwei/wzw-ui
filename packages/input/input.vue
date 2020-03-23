<template>
  <div 
    :class="inputClass"
    @mouseleave="isHover = false"
    @mouseenter="isHover = true"
  >
    <template v-if="type === 'text'">
      <input
        ref="input"
        class="wzw-input__inner"
        v-bind="$attrs"
        :type="showPassword ? passwordVisible ? 'password' : 'text' : type" 
        :value="value"
        @input="input"
        @focus="focus"
        @blur="blur"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        :readonly="readonly"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
        :aria-label="label"
      >
      <span class="wzw-input__prefix" v-if="prefixIcon || $slots.prefix">
        <slot name="prefix"></slot>
        <span 
          v-if="prefixIcon"
          class="wzw-input__icon"
          :class="prefixIcon" 
        ></span>
      </span>
      <span class="wzw-input__suffix" v-if="suffixIcon || clearable || showPassword || $slots.suffix">
        <slot name="suffix"></slot>
        <span 
          v-if="suffixIcon"
          class="wzw-input__icon"
          :class="suffixIcon" 
        ></span>
        <span 
          v-if="showClear"
          class="wzw-input__icon wzw-icon-guanbi" 
          @click="handleCloes"
          @mousedown.prevent
        ></span>
        <span 
          v-if="value && showPassword"
          @click="changePassword"
          class="wzw-input__icon wzw-icon-eye" 
        ></span>
      </span>
    </template>
    <textarea 
      v-else
      ref="textarea"
      class="wzw-textarea__inner"
      v-bind="$attrs"
      :value="value" 
      @input="input"
      @focus="focus"
      @blur="blur"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      :readonly="readonly"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :aria-label="label"
    ></textarea>
    
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
    label: String,
    disabled: Boolean,
    readonly: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data () {
    return {
      isComposing: false, // 是否正在输入中文
      passwordVisible: false, // 切换密码按钮
      isHover: false, // 是否显示清空按钮
      focused: false // 是否获取焦点
    }
  },
  computed: {
    inputClass () {
      let classes = [this.type === 'text' ? 'wzw-input' : 'wzw-textarea']
      if (this.disabled) {
        classes.push(`is-disabled`)
      }
      if (this.clearable || this.showPassword || this.suffixIcon || this.$slots.suffix) {
        classes.push(`wzw-input--suffix`)
      }
      if (this.prefixIcon || this.$slots.prefix) {
        classes.push(`wzw-input--prefix`)
      }
      return classes
    },
    showClear () {
      return this.clearable && this.value && (this.focused || this.isHover)
    }
  },
  methods: {
    handleCompositionStart () {
      this.isComposing = true
    },
    handleCompositionEnd (e) {
      this.isComposing = false
      this.input(e)
    },
    input (e) {
      if (this.isComposing) return
      this.$emit('input', e.target.value)
    },
    handleCloes () {
      this.$emit('input', '')
    },
    focus () {
      this.focused = true
    },
    blur () {
      this.focused = false
    },
    changePassword () {
      this.passwordVisible = !this.passwordVisible
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  },
  mounted() {
    // console.log(this.$attrs)
  },
}
//给组件绑定事件都时候可以绑定不上，需要加修饰符@click.native给原生元素绑事件
//mousedown.native.prevent 阻止默认行为
</script>
<style lang="scss">

</style>
