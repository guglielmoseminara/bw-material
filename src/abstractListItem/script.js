export default {
  props: {
    item: {
      type: Object,
      required: false
    },
    internalListType: {
      type: String,
      default: 'dropdown'
    }
  },
  data () {
    return {
     
    }
  },
  methods: {
    emitChange(ev) {
      this.$emit('change', ev);
    }
  },
  
}