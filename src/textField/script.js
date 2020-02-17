import { MDCTextField } from '@material/textfield'
import { MDCComponent } from '@material/base/component'
import utils from "../utils/utils";

export default {
  model: {
    prop: 'value',
    event: 'model'
  },
  provide () {
    return {
      getLabel: this.getLabel,
      getLineRipple: this.getLineRipple,
      getOutline: this.getOutline,
      getHelperText: this.getHelperText,
      getCharacterCounter: this.getCharacterCounter,
      getLeadingIcon: this.getLeadingIcon,
      getTrailingIcon: this.getTrailingIcon
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: false
    },
    textarea: {
      type: Boolean,
      default: false
    },
    useNativeValidation: {
      type: Boolean,
      default: true
    },
    valid: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    inputType: {
      type: String,
      default: 'text' // html input type: email, password ecc
    }
  },
  data () {
    return {
      mdcTextField: undefined,
      slotObserver: undefined,
      noLabel: false,
      hasLeadingIcon: false,
      hasTrailingIcon: false
    }
  },
  computed: {
    classes () {
      let classes = {
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--with-leading-icon': this.hasLeadingIcon,
        'mdc-text-field--with-trailing-icon': this.hasTrailingIcon,
        'mdc-text-field--outlined': this.outlined,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--focused': this.focused, // won't change the actual activeElement
        'mdc-text-field--textarea': this.textarea,
        'mdc-text-field--no-label': this.noLabel,
      }
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      } 
      return classes;
    }
  },
  watch: {
    useNativeValidation () {
      this.mdcTextField.useNativeValidation = this.useNativeValidation
    },
    valid () {
      this.mdcTextField.valid = this.valid
    },
    value () {
      this.mdcTextField.value = this.value
    },
    disabled () {
      this.mdcTextField.disabled = this.disabled
    },
    classes () {
      this.$nextTick(() => this.reInstantiate())
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.instantiate()
 
  },
  beforeDestroy () {
    this.mdcTextField.destroy()
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlot () {
      this.noLabel = this.$el.querySelector('.mdc-floating-label') == null
      this.hasLeadingIcon = this.$slots.leadingIcon != null
      this.hasTrailingIcon = this.$slots.trailingIcon != null
      // to make our icons compatible with version 0.x.y
      if (this.hasLeadingIcon) {
        this.$slots.leadingIcon.forEach(n => {
          if (n.elm instanceof Element) {
            n.elm.classList.add('mdc-text-field__icon')
          }
        })
      }
      if (this.hasTrailingIcon) {
        this.$slots.trailingIcon.forEach(n => {
          if (n.elm instanceof Element) {
            n.elm.classList.add('mdc-text-field__icon')
          }
        })
      }
      this.checkConfig()
    },
    reInstantiate () {
      this.mdcTextField.destroy()
      this.instantiate()
    },
    instantiate () {
      this.mdcTextField = MDCTextField.attachTo(this.$el)
      this.mdcTextField.useNativeValidation = this.useNativeValidation
      this.mdcTextField.valid = this.valid
      this.mdcTextField.disabled = this.disabled
      this.$nextTick(() => { // wait for the DOM change
        // tell all the children that the parent is initialized
        if (this.mdcTextField.label_ instanceof MDCComponent) {
          this.mdcTextField.label_.emit('_init')
        }
        if (this.mdcTextField.outline_ instanceof MDCComponent) {
          this.mdcTextField.outline_.emit('_init')
        }
        if (this.mdcTextField.lineRipple_ instanceof MDCComponent) {
          this.mdcTextField.lineRipple_.emit('_init')
        }
        if (this.mdcTextField.helperText_ instanceof MDCComponent) {
          this.mdcTextField.helperText_.emit('_init', this.mdcTextField.helperText_)
        }
        if (this.mdcTextField.characterCounter_ instanceof MDCComponent) {
          this.mdcTextField.characterCounter_.emit('_init', this.mdcTextField.characterCounter_)
        }
        if (this.mdcTextField.leadingIcon_ instanceof MDCComponent) {
          this.mdcTextField.leadingIcon_.emit('_init')
        }
        if (this.mdcTextField.trailingIcon_ instanceof MDCComponent) {
          this.mdcTextField.trailingIcon_.emit('_init')
        }
      })
    },
    checkConfig () {
      if (this.fullWidth && !this.noLabel && !this.textarea) {
        console.warn(
          'Do not use floating label with a full width text input. ' +
          'See https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield#full-width'
        )
      }
      if (this.fullWidth && this.outlined && !this.textarea) {
        console.warn(
          'Do not use outlined style on full width text input. ' +
          'See: https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield#full-width'
        )
      }
    },
    getLabel () {
      return this.mdcTextField.label_
    },
    getLineRipple () {
      return this.mdcTextField.lineRipple_
    },
    getOutline () {
      return this.mdcTextField.outline_
    },
    getHelperText () {
      return this.mdcTextField.helperText_
    },
    getCharacterCounter () {
      return this.mdcTextField.characterCounter_
    },
    getLeadingIcon () {
      return this.mdcTextField.leadingIcon_
    },
    getTrailingIcon () {
      return this.mdcTextField.trailingIcon_
    }
  }
}
