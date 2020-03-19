import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import utils from "../utils/utils";

export default {
    model: {
        prop: 'modelValue',
        event: 'input'
    },
    data() {
        return {
        }
    },
    props: {
        id: {
            type: String,
            default: function () {
                return 'checkbox-id-' + this._uid;
            },
        },
        name: {
            type: String,
            default: null,
        },
        value: {
            default: null,
        },
        modelValue: {
            default: undefined,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'primary',
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        model: {},
        label: {
            type: String,
            default: '',
        },
    },
    computed: {
        state() {
            if (this.modelValue === undefined) {
                return this.checked;
            }
            if (Array.isArray(this.modelValue)) {
                return this.modelValue.map(item => JSON.stringify(item))
                    .indexOf(JSON.stringify(this.value)) > -1;
            }
            return !!this.modelValue;
        },
        classes() {
            let classes = {};
            if(utils.isDefined(this.color)) {
            classes['color-'+this.color] = true;
            }

            return classes;
        }
        
    },
    methods: {
        onChange() {
            this.toggle();
        },
        toggle(fromMounted = false) {
            let value;
            if (Array.isArray(this.modelValue)) {
                value = this.modelValue.slice(0);
                if (this.state) {
                    value.splice(value.indexOf(this.value), 1);
                } else {
                    value.push(this.value);
                }
            } else {
                value = !this.state;
            }
            this.$emit('input', value);
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
            this.toggle(true);
        }
        const checkbox = new MDCCheckbox(this.$refs.mdcCheck);
        const formField = new MDCFormField(this.$refs.mdcFormField);
        formField.input = checkbox;
    },
};