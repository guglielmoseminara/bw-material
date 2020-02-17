import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'
import utils from "../utils/utils";

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    ripple: {
      type: Boolean,
      default: true
    },
    unbounded: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
  },
  data () {
    return {
      mdcIconButtonToggle: undefined,
      mdcRipple: undefined,
      isToggleButtonObserver: undefined,
      isToggleButton: false,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      let classes = {
        'material-icons': this.icon && this.icon !== ''
      };
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      } 
      return classes;
    }
  },
  watch: {
    value (value) {
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.on = value
      }
    },
    ripple (value) {
      if (this.mdcRipple instanceof MDCRipple) {
        this.mdcRipple.destroy()
      }
      if (value) {
        this.mdcRipple = MDCRipple.attachTo(this.$el)
        this.mdcRipple.unbounded = this.unbounded
      } else {
        this.mdcRipple = undefined
      }
    },
    unbounded (value) {
      if (this.mdcRipple instanceof MDCRipple) {
        this.mdcRipple.unbounded = value
      }
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.unbounded = value
      }
    },
    href () {
      this.$nextTick(() => {
        this.updateSlots()
      })
    }
  },
  mounted () {
    this.updateIsToggleButton()
    this.isToggleButtonObserver = new MutationObserver(() => this.updateIsToggleButton())
    this.isToggleButtonObserver.observe(this.$el, {
      childList: true,
      attributes: true // observe the class change. Toggle doesn't have the icon classes like 'material-icons' in the root element while the normal icon button has.
    })
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
      this.mdcIconButtonToggle.destroy()
    }
    if (this.mdcRipple instanceof MDCRipple) {
      this.mdcRipple.destroy()
    }
    this.isToggleButtonObserver.disconnect()
    this.slotObserver.disconnect()
  },
  methods: {
    updateIsToggleButton () {
      this.isToggleButton = this.$slots.toggleOn != null && this.$slots.toggleOff != null
      // no need to call the $nextTick because the slotObserver will observe the change and call this update method again
    },
    updateSlots () {
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.destroy()
      }
      if (this.mdcRipple instanceof MDCRipple) {
        this.mdcRipple.destroy()
      }
      if (this.isToggleButton) {
        this.$slots.toggleOn.forEach(e => {
          if (e.elm instanceof Element) {
            e.elm.classList.add('mdc-icon-button__icon', 'mdc-icon-button__icon--on')
          }
        })
        this.$slots.toggleOff.forEach(e => {
          if (e.elm instanceof Element) {
            e.elm.classList.add('mdc-icon-button__icon')
          }
        })
        this.mdcIconButtonToggle = MDCIconButtonToggle.attachTo(this.$el)
        this.mdcIconButtonToggle.on = this.value
        this.mdcIconButtonToggle.unbounded = this.unbounded
      } else {
        this.$el.querySelectorAll('.mdc-icon-button__icon').forEach(e => e.classList.remove('mdc-icon-button__icon', 'mdc-icon-button__icon--on'))
        this.mdcIconButtonToggle = undefined
        if (this.ripple) {
          this.mdcRipple = MDCRipple.attachTo(this.$el)
          this.mdcRipple.unbounded = this.unbounded
        } else {
          this.mdcRipple = undefined
        }
      }
    }
  }
}