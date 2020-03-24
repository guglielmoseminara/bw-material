import utils from "../utils/utils";

export default {
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    value: {
      type: [Object, Date],
      default: null
    },
    isRange:{
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Date'
    },
    placeholder: {
      type: String,
      default: 'Date'
    },
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    update(ev) {
      this.$emit('model', ev)
    }
  },
  computed: {
    classes() {
      let classes = {};
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      } 
      return classes;
    }
  },
}
