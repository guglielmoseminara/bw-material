import { MDCTextFieldHelperText } from '@material/textfield/helper-text'
export default {
  props: {
    persistent: {
      type: Boolean,
      default: false
    },
    validationMsg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTextFieldHelperText: undefined
    }
  },
  watch: {
    persistent (val) {
      this.mdcTextFieldHelperText.foundation.setPersistent(val)
    },
    validationMsg (val) {
      this.mdcTextFieldHelperText.foundation.setValidation(val)
    }
  },
  mounted () {
    if (!(this.getHelperText instanceof Function)) { // can not be init by parent
      this.mdcTextFieldHelperText = MDCTextFieldHelperText.attachTo(this.$el)
      this.mdcTextFieldHelperText.foundation.setPersistent(this.persistent)
      this.mdcTextFieldHelperText.foundation.setValidation(this.validationMsg)
    }
  },
  beforeDestroy () {
    if (this.mdcTextFieldHelperText instanceof MDCTextFieldHelperText) {
      this.mdcTextFieldHelperText.destroy()
    }
  },
  methods: {
    onParentInit (helperText) {
      if (helperText instanceof MDCTextFieldHelperText) {
        if (this.mdcTextFieldHelperText instanceof MDCTextFieldHelperText) this.mdcTextFieldHelperText.destroy()
        this.mdcTextFieldHelperText = helperText
        this.mdcTextFieldHelperText.foundation.setPersistent(this.persistent)
        this.mdcTextFieldHelperText.foundation.setValidation(this.validationMsg)
      }
    }
  }
}