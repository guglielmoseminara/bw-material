import {MDCSwitch} from '@material/switch';

import utils from "../utils/utils";

export default {
    data() {
        return {
            classList: []
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
        if(utils.isDefined(this.color)) {
            this.classList.push('color-'+this.color);
        }
        if(this.disabled) {
            this.classList.push('mdc-switch--disabled');
        }
    },
    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },
    computed: {
    },
}