<template>
  <button :class="btnClass">
    <wzw-icon :icon="icon" v-if="icon" class="icon"></wzw-icon>
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
      if (this.iconPosition) {
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
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.wzw-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus, &:active {
    color: $active-color;
    border-color: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  &-warning {
    background: $warning;
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
    &-#{$key}:hover {
      background-color: #{$val};
      border: 1px solid #{$val};
      color: #fff;
    }
  }
  @each $key, $val in (primary: $primary-active, warning: $warning-active, success: $success-active, info: $info-active, danger: $danger-active) {
    &-#{$key}:active,&-#{$key}:focus {
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
}
</style>