import { MDCRipple } from '@material/ripple'
export default {
  props: {
    activated: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcRipple: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--disabled': this.disabled
      }
    }
  },
  watch: {
    classes () {
      this.reInstantiateRipple()
      if (this.selected) this.$el.setAttribute('aria-selected', 'true')
    },
    ripple () {
      this.reInstantiateRipple()
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (this.ripple) this.mdcRipple = MDCRipple.attachTo(this.$el)
    if (this.selected) this.$el.setAttribute('aria-selected', 'true')
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlots () {
      if (this.$slots.graphic) {
        this.$slots.graphic.map(n => {
          n.elm.classList.add('mdc-list-item__graphic')
        })
      }
      if (this.$slots.meta) {
        this.$slots.meta.map(n => {
          n.elm.classList.add('mdc-list-item__meta')
        })
      }
    },
    reInstantiateRipple () {
      if (this.ripple) {
        if (this.mdcRipple) {
          this.mdcRipple.destroy()
        }
        MDCRipple.attachTo(this.$el)
      } else {
        if (this.mdcRipple) {
          this.mdcRipple.destroy()
        }
        this.mdcRipple = undefined
      }
    }
  }
}