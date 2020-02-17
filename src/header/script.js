import { MDCTopAppBar } from '@material/top-app-bar'

export default {
  props: {
    haveContainer: {
      type: Boolean,
      default: true
    },
    startMenu: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    scrollTarget: {
      type: Object,
      default: () => undefined,
      validator: val => val instanceof EventTarget
    },

    // if non link centerSlot will be rendered
    //an array of group of Links. Every group of links is an array of object with name, icon, href.
    navLinksGroups: {
      type: Array, 
      required: false,
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--dense': this.dense && !this.short && !this.prominent,
        'mdc-top-app-bar--prominent': this.prominent && !this.short && !this.dense,
        'mdc-top-app-bar--dense-prominent': this.dense && this.prominent,
        'mdc-top-app-bar--short': this.short && !this.collapsed,
        'mdc-top-app-bar--short-collapsed': this.collapsed && this.short,
        'mdc-top-app-bar--fixed': this.fixed && !this.short
      }
    }
  },
  watch: {
    scrollTarget (el) {
      if (this.mdcTopAppBar && el) {
        this.mdcTopAppBar.setScrollTarget(el)
      }
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {
    this.mdcTopAppBar = MDCTopAppBar.attachTo(this.$el);
    if (this.scrollTarget && this.scrollTarget !== window) {
      this.mdcTopAppBar.setScrollTarget(this.scrollTarget);
    }
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.mdcDrawer.open = true;
    },
    closeDrawer() {
      this.$refs.drawer.mdcDrawer.open = false;
    }
  },
}
