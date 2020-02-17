import { MDCFloatingLabel } from '@material/floating-label';

export default {
  inject: ['getLabel'],
  props: {
    floatAbove: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcFloatingLabel: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      }
    }
  },
  mounted () {
    if (!(this.getLabel instanceof Function)) { // can not be init by parent
      this.mdcFloatingLabel = MDCFloatingLabel.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcFloatingLabel instanceof MDCFloatingLabel) {
      this.mdcFloatingLabel.destroy()
    }
  },
  methods: {
    onParentInit () {
      const label = this.getLabel()
      if (label instanceof MDCFloatingLabel) {
        if (this.mdcFloatingLabel instanceof MDCFloatingLabel) this.mdcFloatingLabel.destroy()
        this.mdcFloatingLabel = label
      }
    }
  }
}