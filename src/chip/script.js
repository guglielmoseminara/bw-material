import { MDCRipple } from '@material/ripple';
import utils from "../utils/utils";
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isFilter: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: "fill" // fill - outline
    },
  },
  data () {
    return {
      slotObserver: undefined
    }
  },
  computed: {
    classes() {

      let classes = {
        'mdc-chip--selected': this.value
      }
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      }
      if(utils.isDefined(this.type)) {
        classes[this.type] = true;
      }
      return classes;
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    });
    const chipRipple = new MDCRipple(this.$refs.chipRipple);
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlots () {
      if (this.$slots.leadingIcon) {
        this.$slots.leadingIcon.map((n) => {
          n.elm.classList.add('mdc-chip__icon')
          if (this.value) {
            n.elm.classList.add('mdc-chip__icon--leading-hidden')
          } else {
            n.elm.classList.remove('mdc-chip__icon--leading-hidden')
            n.elm.classList.add('mdc-chip__icon--leading')
          }
        })
      }
      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.map((n) => {
          n.elm.classList.add('mdc-chip__icon')
          n.elm.classList.add('mdc-chip__icon--trailing')
          n.elm.setAttribute('role', 'button')
          n.elm.setAttribute('tabindex', '0')
        })
      }
    },
    onTrailingIconInteraction (e) {
      this.$emit('onTrailingIconInteraction', e.detail)
    }
  }
}