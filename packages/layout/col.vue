<script>
export default {
  name: 'wzw-col',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  data () {
    return {
      gutter: 0  
    }
  },
  computed: {
    colClass () {
      let classes = []
      classes.push(`wzw-col-${this.span}`)
      if (this.offset) {
        classes.push(`wzw-col-offset-${this.offset}`)
      }
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
        if (typeof this[type] === 'object') {
          let {span, offset} = this[type]
          span && classes.push(`wzw-col-${type}-${span}`)
          offset && classes.push(`wzw-col-${type}-offset-${offset}`)
        } else {
          this[type] && classes.push(`wzw-col-${type}-${this[type]}`)
        }
      })
      return classes
    },
    colStyle () {
      let style = {}
      style = {
        ...style,
        paddingLeft: this.gutter/2 + 'px',
        paddingRight: this.gutter/2 + 'px'
      }
      return style
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.colClass,
      style: this.colStyle
    }, this.$slots.default)
  }
}
</script>
<style lang="scss">
@import '@/styles/_val.scss';

@for $i from 1 through 24 {
  .wzw-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .wzw-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
}
@include res(xs) {
  @for $i from 1 through 24 {
    .wzw-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .wzw-col-xs-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 24 {
    .wzw-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .wzw-col-sm-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .wzw-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .wzw-col-md-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .wzw-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .wzw-col-lg-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .wzw-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .wzw-col-xl-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
</style>