export default {
  props: {
    square: {
      type: Boolean,
      default: true
    },
    sixteenNine: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-card__media--square': this.square,
        'mdc-card__media--16-9': this.sixteenNine
      }
    }
  }
}