import {MDCSwitch} from '@material/switch';
import utils from "../utils/utils";

export default {
    data() {
        return {
        }
    },
    props: {
        id: {
            type: String,
            default: function () {
                return 'switch-id-' + this._uid;
            },
        },
        value: {
            default: false
        },
        disabled: {
            default: false
        },
        label: {
            default: ''
        },
        color: {
            type: String,
            default: 'primary'
        },
    },
    mounted () {
        this.$emit('input', this.value);
        const checkbox = new MDCSwitch(this.$refs.mdcSwitch);
    },
    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },
    computed: {
        classes() {
            let classes = {
              'mdc-switch--disabled': this.disabled
            }
            if(utils.isDefined(this.color)) {
              classes['color-'+this.color] = true;
            }
            return classes;
          }
    },
}