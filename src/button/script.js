import { MDCRipple } from '@material/ripple';
    export default {
    props: {
        type: {
            type: String,
            default: "contain" // contain - outline
        },
        subtype: {
            type: String,
            default: 'default' // fab
        },
        label: {
            type: String,
            required: false,
            default: "Button"
        },
        color: {
            type: String,
            default: "primary"
        },
        rounded: {
            type: String,
            default: "default",
        },
        icon: {
            type: Object,
            // default: function (){
            //   return {
            //     position: 'l',
            //     name: 'add'
            //   }
            // }
        },
        haveShadow: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: "default",
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clickEventName: {
            type: String,
            required: false
        },

        clickEventParams: {
            type: [Array, Object, String, Number],
            required: false
        },
    },
    data() {
        return {
            classList: []
        }
    },
    mounted() {
        new MDCRipple(this.$refs.bwButton);
        let baseClass = this.subtype == 'fab' ? 'mdc-fab': 'mdc-button';
        this.classList.push(baseClass);
        this.classList.push(this.type);

        if(this.rounded && this.subtype!=='fab') {
            this.classList.push('round-'+this.rounded);
        }

        if(this.color) {
            this.classList.push('color-'+this.color);
        }

        if(this.size) {
            this.classList.push('size-'+this.size);
        }

        if(this.icon && !this.icon.position) {
            this.icon.position = 'l';
        }

        if(this.haveShadow) {
            this.classList.push('shadow-default');
        }
    },
    methods: {
        emitClick() {
            this.$emit('click-btn');
            if(this.clickEventName) {
                this.$eventHub.$emit(this.clickEventName, this.clickEventParams);
            }
        }
    },
}