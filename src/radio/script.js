import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';
import utils from "../utils/utils";

export default {
  model: {
      prop: 'modelValue',
      event: 'input'
  },
  data() {
    return {
      classList: []
    }
  },
  props: {
      id: {
          type: String,
          default: function () {
              return 'radio-id-' + this._uid;
          },
      },
      name: {
          type: String,
          default: null,
      },
      label: {
        type: String,
        default: '',
      },
      value: {
          default: '',
      },
      modelValue: {
          default: undefined,
      },
      color: {
          type: String,
          default: 'primary',
      },
      checked: {
          type: Boolean,
          default: false,
      },
      required: {
          type: Boolean,
          default: false,
      },
      disabled: {
          type: Boolean,
          default: false,
      },
      model: {}
  },
  computed: {
      state() {
          if (this.modelValue === undefined) {
              return this.checked;
          }
          return this.modelValue === this.value;
      }
  },
  methods: {
      onChange() {
          this.toggle();
      },
      toggle() {
          this.$emit('input', this.state ? '' : this.value);
      }
  },
  watch: {
      checked(newValue) {
          if (newValue !== this.state) {
              this.toggle();
          }
      }
  },
  mounted() {
      if (this.checked && !this.state) {
          this.toggle();
      }
      const radio = new MDCRadio(this.$refs.mdcRadio);
      const formField = new MDCFormField(this.$refs.mdcFormField);
      formField.input = radio;
      if(utils.isDefined(this.color)) {
        this.classList.push('color-'+this.color);
      }
  },
}
