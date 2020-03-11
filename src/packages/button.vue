<template>
  <button :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
    <wzw-icon :icon="icon" v-if="icon && !loading" class="icon"></wzw-icon>
    <wzw-icon icon="loding" v-if="loading" class="icon"></wzw-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
const typeList = ['warning', 'danger', 'info', 'primary', 'success']
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
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
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
      return classes
    }
  }
}
</script>
<style lang="scss">
@import '../styles/_val.scss';
$height: 42px;
$font-size: 14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #fff;
$active-color: #3a8ee6;
$border-radius: 20px;

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
  @each $key, $val in (primary: $primary, warning: $warning, success: $success, info: $info, danger: $danger) {
    &-#{$key} {
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
  .icon {
    width: 16px;
    height: 16px;
    &+span {
      margin-left: 4px;
    }
  }
  &-icon-left {
    svg {
      order: 1
    }
    span {
      order: 2
    }
  }
  &-icon-right {
    svg {
      order: 2;
      margin-left: 4px;
    }
    .icon + span {
      order: 1;
      margin-left: 0;
    }
  }
  &[disabled] {
    pointer-events: none;
    position: relative;
    &:before {
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
}
</style>