import { MDCChipSet } from '@material/chips';
import utils from "../utils/utils";
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    choice: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    input: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Object, String, Number, Array], // Array for filter case
      default: undefined
    },
    configOptions: {
      type: Object,
      default: () => { return {nameField: 'name', codeField: 'code'}}
    },
    color: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: "fill" // fill - outline
    },
  },
  data () {
    return {
      fieldsArray: {}
    }
  },
  computed: {
    classes () {
      let classes = {
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input,
      }
      if(utils.isDefined(this.color)) {
        classes['color-'+this.color] = true;
      }
      return classes;
    },
  },
  mounted () {
    this.mdcChipSet = MDCChipSet.attachTo(this.$el);
    this.updateFieldsArray(this.value);
  },
  beforeDestroy () {
    this.mdcChipSet.destroy()
  },
  methods: {
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
    onClick(value, index) {
        if (this.filter) {
          if (value) {
            this.value.push(this.getValue(this.options[index]));
          } else {
            let tempArray = [];

            if(utils.isDefined(this.configOptions.valueField)) {
              this.value.forEach(el => {
                if(el !== this.getCode(this.options[index])) {
                  tempArray.push(el);
                }
              });
            } else {
              this.value.forEach(el => {
                if(this.getCode(el) !== this.getCode(this.options[index])) {
                  tempArray.push(el);
                }
              });
            }
            this.$emit('change', tempArray);
            this.updateFieldsArray(this.value);
          }
        } else {
          this.$emit('change', this.getValue(this.options[index]));
        }
    }, 
    isContained(option) {
      return (this.fieldsArray.hasOwnProperty(option[this.configOptions.codeField])
      || this.fieldsArray.hasOwnProperty(option));
    },
    updateFieldsArray(val) {
      this.fieldsArray = {};
      if (this.filter && val.length > 0) {
        val.forEach((el)=> {
          if (utils.isDefined(el) && typeof el === "object") {
            this.fieldsArray[el[this.configOptions.codeField]] = el;
          } else {
            this.fieldsArray[el] = el;
          }
         });
      }
    }
  },
  watch: {
    value: {
      handler: function (val, oldVal) {
        this.updateFieldsArray(val);
      },
      deep: true,
    },
  }
  
}