import { MDCTabScroller } from '@material/tab-scroller';

export default {
  inject: ['getTabScroller'],
  props: {
    align: {
      type: String,
      default: '',
      validator: function (value) {
        return ['start', 'end', 'center', ''].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      mdcTabScroller: undefined
    }
  },
  computed: {
    classes () {
      const result = {}
      if (this.align !== '') {
        const className = `mdc-tab-scroller--align-${this.align}`
        result[className] = true
      }
      return result
    }
  },
  mounted () {
    if (this.getTabScroller instanceof Function) {
      this.$nextTick(() => {
        this.mdcTabScroller = this.getTabScroller()
      })
    } else {
      this.mdcTabScroller = MDCTabScroller.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcTabScroller) this.mdcTabScroller.destroy()
  }
}