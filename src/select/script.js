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
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false
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
      /** if no valueField is provided the entire object is used as value
       * 
       * codeField: mandatory if you override the default configOptions
       * 
       * codeField is the field (unique) to use as a key for options 
       * for ex: 'code' or the default 'id' 
      **/
      type: Object,
      default: () => { return {nameField: 'name', codeField: 'id'}} 
    },
  },
  data () {
    return {
      mdcSelect: undefined,
      mdcFloatingLabel: undefined,
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
    },
  },
  mounted () {
    this.instantiate();
    
  },
  beforeDestroy () {
    this.mdcSelect.destroy()
  },
  methods: {
    onSelect(ev) {
    },
    instantiate() {
      this.mdcSelect = MDCSelect.attachTo(this.$el);
      this.mdcSelect.disabled = this.disabled;
      this.mdcSelect.required = this.required;
    },
    selectClicked(obj) {
      this.$emit('input', utils.isDefined(this.configOptions.valueField) ? 
      obj[this.configOptions.valueField] : obj);
    },
    isOptionSelected(option) {
      if(utils.isDefined(this.configOptions.valueField)) {
        return option[this.configOptions.valueField] == this.value;
      } else {
        return option[this.configOptions.codeField] == this.value[this.configOptions.codeField];
      }
    }
  },
  watch: {
    required (val) {
      this.mdcSelect.required = val;
    },
    value () {
      this.mdcSelect.value = this.value[this.configOptions.codeField];
    },
    disabled (val) {
      this.mdcSelect.disabled = val;
    }
  },
}