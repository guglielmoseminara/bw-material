import { MDCRipple } from '@material/ripple';
import utils from "../utils/utils";

export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    displayMarkers: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, Array, String],
      default: 0
    },
    tooltip: {
      type: String,
      default: 'none' // always, active
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
    data: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: 'primary'  
    }
  },
  data () {
    return {
      myvalue: this.value
    }
  },
  computed: {
    classes () {
      let classes = {};
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      } 
      return classes;
    }
  },
  mounted () {
    // this.$refs.sliderThumb.$el.querySelector(".vue-slider-dot-handle").setAttribute('tabindex', '0');
    const sliderRipple = new MDCRipple(this.$refs.slider);
    if(utils.isDefined(this.color)) {
        this.classes['color-'+this.color] = true;
    }
  },
  beforeDestroy () {
  },
  methods: {
    changeModel(ev) {
      this.$emit('input', this.myvalue);
    }
  }
}