<template>
  <button :autofocus="autofocus" :type="nativeType" :class="btnClass" :disabled="disabled || loading" @click="$emit('click', $event)">
    <!-- <wzw-icon :icon="icon" v-if="icon && !loading"></wzw-icon>
    <wzw-icon icon="loding" v-if="loading" class="icon wzw-pulse"></wzw-icon> -->
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
const typeList = ['warning', 'danger', 'info', 'primary', 'success', 'text', 'default']
const iconPosition = ['left', 'right']
const name = 'wzw-button'
export default {
  name,
  props: {
    type: {
      type: String,
      default: 'default',
      validator (type) {
        if (type && !typeList.includes(type)) {
          console.error(`${name}组件type属性必须包含${typeList.join(',')}`)
        }
        return true
      }
    },
    plain: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    size: {
      type: String,
      defalut: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (type) {
        if (type && !iconPosition.includes(type)) {
          console.error(`${name}组件iconPosition属性必须包含${iconPosition.join(',')}`)
        }
        return true
      }
    }
  },
  computed: {
    btnClass () {
      let classes = [name]
      if (this.type) {
        classes.push(`${name}--${this.type}`)
      }
      if (this.plain) {
        classes.push(`is-plain`)
      }
      // if (this.icon) {
      //   classes.push(`${name}-icon-${this.iconPosition}`)
      // }
      if (this.round) {
        classes.push(`is-round`)
      }
      if (this.circle) {
        classes.push(`is-circle`)
      }
      if (this.disabled) {
        classes.push(`is-disabled`)
      }
      if (this.loading) {
        classes.push(`is-loading`)
      }
      if (this.size) {
        classes.push(`${name}-${this.size}`)
      }
      return classes
    }
  }
}
</script>
<style lang="scss">
@import "styles/button.scss";
</style>