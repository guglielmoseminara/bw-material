import { MDCDrawer } from '@material/drawer'
export default {
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    navLinksGroups: {
      type: Array, 
      required: false,
    }
  },
  data () {
    return {
      mdcDrawer: undefined,
      hasHeaderClass: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-drawer--dismissible': this.dismissible,
        'mdc-drawer--modal': this.modal
      }
    },
    model: {
      get () {
        return this.open
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    modal () {
      if (!this.modal) {
        this.mdcDrawer.destroy()
        this.mdcDrawer = undefined
      } else {
        this.$nextTick(function () {
          this.mdcDrawer = new MDCDrawer(this.$el)
        })
      }
    },
    dismissible () {
      if (!this.dismissible) {
        this.mdcDrawer.destroy()
        this.mdcDrawer = undefined
      } else {
        this.$nextTick(function () {
          this.mdcDrawer = new MDCDrawer(this.$el)
        })
      }
    },
    open () {
      if (this.mdcDrawer.open !== this.open) this.mdcDrawer.open = this.open
    },
    'mdcDrawer.open': function () {
      this.model = this.mdcDrawer.open
    }
  },
  mounted () {
    // to avoid error throw by focus trap
    this.$nextTick(function () {
      if (!this.mdcDrawer && (this.dismissible || this.modal)) { 
        this.mdcDrawer = new MDCDrawer(this.$el)
      }
    })
  },
  provide: {
    mdcDrawer: this
  },
  beforeDestroy () {
    if (this.mdcDrawer) this.mdcDrawer.destroy()
  },
  methods: {
    onClosed () {
      if (this.model) this.model = false
      this.$emit('closed')
    },
    onOpened () {
      this.$emit('opened')
    }
  }
}