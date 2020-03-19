import { MDCSlider } from '@material/slider';
import { MDCRipple } from '@material/ripple';
import utils from "../utils/utils";

export default {
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    displayMarkers: {
      type: Boolean,
      default: false
    },
    discrete: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      validator: value => value > 0,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
        type: String,
        default: 'primary'  
    }
  },
  data () {
    return {
      mdcSlider: undefined
    }
  },
  computed: {
    classes () {
      let classes = {
        'mdc-slider--discrete': this.discrete,
        'mdc-slider--display-markers': this.displayMarkers
      }
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      }
      return classes;
    }
  },
  watch: {
    value () {
      this.mdcSlider.value = this.value
    },
    min () {
      this.mdcSlider.min = this.min
    },
    max () {
      this.mdcSlider.max = this.max
    },
    step () {
      this.mdcSlider.step = this.step
    },
    disabled () {
      this.mdcSlider.disabled = this.disabled
    }
  },
  mounted () {
    this.mdcSlider = MDCSlider.attachTo(this.$el);
    const sliderRipple = new MDCRipple(this.$refs.sliderThumb);
    this.mdcSlider.value = this.value;
    this.mdcSlider.min = this.min;
    this.mdcSlider.max = this.max;
    this.mdcSlider.step = this.step;
    this.mdcSlider.disabled = this.disabled;
  },
  beforeDestroy () {
    this.mdcSlider.destroy()
  },
  methods: {
    onInput () {
      this.$emit('input', this.mdcSlider.value)
      this.$emit('update', this.mdcSlider.value)
    },
    onChange () {
      this.$emit('change', this.mdcSlider.value)
    }
  }
}