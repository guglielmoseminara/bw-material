import {MDCSelect} from '@material/select';
import utils from '../utils/utils';
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Object],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: "contain" // contain - outline
    },
    options: {
      type: Array,
      default: () => []
    },
    configOptions: {
      type: Object,
      default: () => { return {nameField: 'name'}}
    },
  },
  data () {
    return {
      select: undefined
    }
  },
  computed: {
    classes () {
      let classes = {
        'mdc-select--outlined': this.type == 'outline',
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
    this.select = new MDCSelect(this.$el);
    this.select.disabled = this.disabled;
  },
  beforeDestroy () {
  },
  methods: {
    onSelect(ev) {
    },
    selectClicked(obj) {
      this.$emit('input',  utils.isDefined(this.configOptions.codeField) ? 
      obj[this.configOptions.codeField] : obj);
    }
  }
}