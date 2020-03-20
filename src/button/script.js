import { MDCRipple } from '@material/ripple';
import utils from "../utils/utils";

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
            default: ""
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
            //     position: 'l', // accepted only 'l' or 'r' param
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
        }
    },
    computed: {
        classes() {
    
          let classes = {
              'shadow-default': this.haveShadow,
          };
          if(utils.isDefined(this.color)) {
            classes['color-'+this.color] = true;
          }
          if(utils.isDefined(this.size)) {
            classes['size-'+this.size] = true;
          }
          if(this.rounded && this.subtype!=='fab') {
            classes['round-'+this.rounded] = true;
          }
          classes[this.type] = true;
          let baseClass = this.subtype == 'fab' ? 'mdc-fab': 'mdc-button';
          classes[baseClass] = true;

          return classes;
        }
    },
    mounted() {
        new MDCRipple(this.$refs.bwButton);
        if(this.icon && !this.icon.position) {
            this.icon.position = 'l';
        }
    },
    methods: {
        emitClick(ev) {
            this.$emit('click-btn', ev);
            if(this.clickEventName) {
                this.$eventHub.$emit(this.clickEventName, this.clickEventParams);
            }
        }
    },
}