export default {
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    fullBleedAction: {
      type: Boolean,
      default: false
    },
    primaryAction: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'vertical'
    }
  },
  data () {
    return {
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-card--outlined': this.outlined,
        'bw-card--horizontal': this.type === 'horizontal'
      }
    },
    actionClasses () {
      return {
        'mdc-card__actions--full-bleed': this.fullBleedAction
      }
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    // secondBtnClicked() {
    //   this.$emit('click-second-btn');
    // },
    updateSlots () {
      if (this.$slots.fullBleedButton) {
        this.$slots.fullBleedButton.map((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
      if (this.$slots.actionButtons) {
        this.$slots.actionButtons.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
      if (this.$slots.actionIcons) {
        this.$slots.actionIcons.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--icon')
          }
        })
      }
      if (this.$slots.actions) {
        this.$slots.actions.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.contains('mdc-icon-button') ? n.elm.classList.add('mdc-card__action--icon') : n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
    }
  }
}