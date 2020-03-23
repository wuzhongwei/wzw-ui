<template>
  <button :autofocus="autofocus" :type="nativeType" :class="btnClass" :disabled="disabled || loading" @click="$emit('click', $event)">
    <wzw-icon :icon="icon" v-if="icon && !loading"></wzw-icon>
    <wzw-icon icon="loding" v-if="loading" class="icon wzw-pulse"></wzw-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
const typeList = ['warning', 'danger', 'info', 'primary', 'success', 'text']
const iconPosition = ['left', 'right']
const name = 'wzw-button'
export default {
  name,
  props: {
    type: {
      type: String,
      default: '',
      validator (type) {
        if (type && !typeList.includes(type)) {
          console.error(`${name}组件type属性必须包含${typeList.join(',')}`)
        }
        return true
      }
    },
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
        classes.push(`${name}-${this.type}`)
      }
      if (this.icon) {
        classes.push(`${name}-icon-${this.iconPosition}`)
      }
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
@import '@/styles/_val.scss';
$height: 42px;
$font-size: 14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #fff;
$active-color: #3a8ee6;
$button-border-radius: 20px;

.wzw-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  background-color: #fff;
  color: $color;
  outline: none;
  -webkit-appearance: none;
  transition: .1s;
  &:hover, &:focus {
    border-color: $primary-light-7;
    background-color: $primary-light-9;
    color: $primary;
  }
  &:active {
    color: $active-color;
    border-color: $active-color;
  }
  &.is-disabled, &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &-text {
    border-color: transparent;
    color: $primary;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  &-text:hover, &-text:focus {
    color: $primary;
    border-color: transparent;
    background-color: transparent;
  }
  &-text.is-disabled,&-text.is-disabled:hover {
    border-color: transparent;
  }
  @each $key, $val in (primary: $primary, warning: $warning, success: $success, info: $info, danger: $danger) {
   &-#{$key}{
      background-color: #{$val};
      border: 1px solid #{$val};
      color: #fff;
      fill: #fff;
    }
  }
  @each $key, $val in (primary: $primary-hover, warning: $warning-hover, success: $success-hover, info: $info-hover, danger: $danger-hover) {
    &-#{$key}:hover, &-#{$key}:focus {
      background-color: #{$val};
      border: 1px solid #{$val};
      color: #fff;
    }
  }
  @each $key, $val in (primary: $primary-active, warning: $warning-active, success: $success-active, info: $info-active, danger: $danger-active) {
    &-#{$key}:active {
      background-color: #{$val};
      border: 1px solid #{$val};
      color: #fff;
    }
  }
  @each $key, $val in (primary: $primary-disabled, warning: $warning-disabled, success: $success-disabled, info: $info-disabled, danger: $danger-disabled) {
   &-#{$key}.is-disabled,&-#{$key}.is-disabled:hover{
      background-color: #{$val};
      border: 1px solid #{$val};
      color: #fff;
    }
  }
  & {
     >i + span {
       margin-left: 5px;
     }
  }
  &-icon-left {
    i {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-icon-right {
    i + span {
      order: 1;
      margin-left: 0;
    }
    [class*=wzw-icon] {
      order: 2;
      margin-left: 5px;
    }
  }
  &.is-loading {
    pointer-events: none;
    position: relative;
    &:after {
      pointer-events: none;
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      background-color: hsla(0,0%,100%,.35);
    }
  }
  &.is-round {
    border-radius: $button-border-radius;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &-medium.is-round {
    padding: 10px 20px;
  }
  &-small.is-round {
    padding: 9px 15px;
  }
  &-mini.is-round {
    padding: 7px 15px;
  }
  &-medium {
    padding: 10px 20px;
    font-size: $font-size;
    border-radius: $border-radius;
  }
  &-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  
}
</style>