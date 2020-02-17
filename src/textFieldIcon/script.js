import { MDCTextFieldIcon } from '@material/textfield/icon'
export default {
  inject: ['getLeadingIcon', 'getTrailingIcon'],
  props: {
    clickable: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      attrs: Object.assign({}, this.$attrs),
      mdcTextFieldIcon: undefined
    }
  },
  computed: {
    classes () {
      return {
        'material-icons': this.icon.length > 0
      }
    }
  },
  watch: {
    clickable (val) {
      if (val) {
        this.$set(this.attrs, 'tabindex', '0')
        this.$set(this.attrs, 'role', 'button')
      } else {
        this.$delete(this.attrs, 'tabindex')
        this.$delete(this.attrs, 'role')
      }
    }
  },
  mounted () {
    if (this.clickable) {
      this.$set(this.attrs, 'tabindex', '0')
      this.$set(this.attrs, 'role', 'button')
    }
    if (!(this.getLeadingIcon instanceof Function || this.getTrailingIcon instanceof Function)) { // can not be init by parent
      this.mdcTextFieldIcon = MDCTextFieldIcon.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcTextFieldIcon instanceof MDCTextFieldIcon) {
      this.mdcTextFieldIcon.destroy()
    }
  },
  methods: {
    onParentInit () {
      const leadingIcon = this.getLeadingIcon()
      const trailingIcon = this.getTrailingIcon()
      const mdcTextFieldIcon = leadingIcon instanceof MDCTextFieldIcon && leadingIcon.root_ === this.$el ? leadingIcon : trailingIcon
      if (this.mdcTextFieldIcon instanceof MDCTextFieldIcon) this.mdcTextFieldIcon.destroy()
      this.mdcTextFieldIcon = mdcTextFieldIcon
    }
  }
}