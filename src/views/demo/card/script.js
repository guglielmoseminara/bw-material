 
 
 export default {
  props: {

  },
  data() {
    return {}
  },
  beforeDestroy(){
    this.$eventHub.$off('actionprova');
   },
  mounted() {
    this.$eventHub.$on('actionprova', async (value) => {
      console.log(value);
    });
  },
  methods: {
    printA() {
      console.log('a');
    },
    printB() {
      console.log('b');
    },
  }
}
