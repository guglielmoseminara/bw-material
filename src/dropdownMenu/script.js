import utils from "../utils/utils";
// import router from "../router/index";

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    listItems: {
      type: Array,
      default: undefined
    },
  },
  data () {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;

    },
  }
}