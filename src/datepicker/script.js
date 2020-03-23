export default {
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    value: {
      type: [Object, Date],
      default: null
    },
    isRange:{
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Date'
    },
    placeholder: {
      type: String,
      default: 'Date'
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    update(ev) {
      this.$emit('model', ev)
    }
  },
  computed: {
  },
}
