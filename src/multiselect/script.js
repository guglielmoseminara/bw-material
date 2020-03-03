import {MDCSelect} from '@material/select';
import utils from '../utils/utils';
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default: [],
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
      default: () => { return {nameField: 'name', codeField: 'code'}} 
    },
  },
  data () {
    return {
      mdcSelect: undefined,
      foundationAdapter: undefined,
      // used internally cause we can have codeField config 
      // and value can't display the name field
      internalValue: [],

      internalOptions: []  
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
    getFormattedValue() {
      return this.internalValue.map(ele => 
        {return ele[this.configOptions.nameField]}
      ).join(', ')
    }
  },
  mounted () {
    // clone to avoid ref problem with other select which have the same options ref
    this.internalOptions = this.options.map(a => ({...a}));
    this.instantiate();
    
    if(this.value.length > 0) {
      this.initChecked();
    }
    
    
  },
  beforeDestroy () {
    this.mdcSelect.destroy()
  },
  methods: {
    onSelect(ev) {
    },
    initChecked() {
      this.internalOptions.forEach((option, j) => {
        if (utils.isDefined(this.configOptions.valueField)) {
          if(this.value.indexOf(this.getCode(option)) !==-1 ) {
            option['checked'] = true;
          }
        } else {
          if (this.value.map(ele => {return this.getCode(ele)})
            .indexOf(this.getCode(option)) !==-1 
          ) {
            option['checked'] = true;
          }
        }
      });
      this.selectClicked();
      this.foundationAdapter.floatLabel(true);
    },
    instantiate() {
      this.mdcSelect = MDCSelect.attachTo(this.$el);
      this.mdcSelect.disabled = this.disabled;
      this.mdcSelect.required = this.required;
      this.foundationAdapter = this.mdcSelect.getDefaultFoundation().adapter_;
    },
    selectClicked(obj, index) {
      let tempArr = [];
      this.internalValue = this.internalOptions.filter((ele, i) => {
        if (utils.isDefined(ele.checked) && ele.checked) {
          tempArr.push(this.options[i]);
        }
        return (utils.isDefined(ele.checked) && ele.checked);
      });
      this.$emit('input', utils.isDefined(this.configOptions.valueField) ? 
        tempArr.map(ele => {return ele[this.configOptions.valueField] }): tempArr);
  
    },
    isOptionSelected() {
      return this.value.length > 0;
    },
    getValue(ele) {
      if(utils.isDefined(this.configOptions.valueField)) {
        return ele[this.configOptions.codeField];
      } else {
        return ele;
      }
    },
    getCode(ele) {
        return ele[this.configOptions.codeField];
    },
  },
  watch: {
    required (val) {
      this.mdcSelect.required = val;
    },
    value: {
      handler: function (val, oldVal) { 
        this.foundationAdapter.setSelectedText(this.getFormattedValue);
      },
      deep: true,
    },
    disabled (val) {
      this.mdcSelect.disabled = val;
    },
    options() {
      this.internalOptions = JSON.parse(JSON.stringify(this.options));
    }
  },
}