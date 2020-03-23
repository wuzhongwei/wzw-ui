<script>
export default {
  name: 'wzw-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    // 垂直 Vertical alignment
    alignV: {
      type: String,
      default: null
    },
    // 水平 Horizontal alignment
    alignH: {
      type: String,
      default: null
    }
  },
  computed: {
    rowStyle () {
      let style = {}
      if (this.gutter) {
        style = {
          ...style,
          marginLeft: -this.gutter/2 + 'px',
          marginRight: -this.gutter/2 + 'px',
        }
      }
      return style
    },
    rowClass () {
      let classes = ['wzw-row']
      if (this.alignH) {
        classes.push(`is-justify-${this.alignH}`)
      }
      if (this.alignV) {
        classes.push(`is-align-${this.alignV}`)
      }
      return classes
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.rowClass,
      style: this.rowStyle
    }, this.$slots.default)
  },
  mounted() {
    this.$children.forEach(element => {
      element.gutter = this.gutter
    });
  }
}
</script>
<style lang="scss">
.wzw-row {
 display: flex;
 flex-wrap: wrap;
}
.is-justify-center {
  justify-content: center;
}
.is-justify-end {
  justify-content: flex-end;
}
.is-justify-space-between {
  justify-content: space-between;
}
.is-justify-space-around {
  justify-content: space-around;
}

.is-align-flex-start {
  align-items: flex-start;
}
.is-align-flex-end {
  align-items: flex-end;
}
.is-align-stretch {
  align-items: stretch;
}
.is-align-baseline {
  align-items: baseline;
}
.is-align-center {
  align-items: center;
}
.is-align-initial {
  align-items: initial;
}
</style>