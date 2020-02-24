import { MDCRipple } from '@material/ripple';
import utils from "../utils/utils";
import RangeSlider from 'range-slider-vue';

export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [Array],
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
    data: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: 'primary'  
    },
    tooltip: {
      type: String,
      default: 'none' // always, active
    }
  },
  data () {
    return {
      myvalue: this.value,
      // tooltipLeftNode: undefined,
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

    // let target = this.$refs.sliderThumb.$el.querySelector('.track-ball-left');
    // this.tooltipLeftNode = utils.createAndAppendNode(target, 'div', {}, ['knobs-tooltip']);
    // this.tooltipLeftNode.innerText = this.value[0];
  },
  beforeDestroy () {
  },
  methods: {
    changeModel(ev) {
      this.$emit('input', this.myvalue);
    },
    slideEnd(e) {
      this.myvalue[0] = e.start;
      this.myvalue[1] = e.end;
      this.$emit('input', this.myvalue);
      // this.tooltipLeftNode.innerText = this.myvalue[0];
    }
  },
  components: {
    RangeSlider
  },
}