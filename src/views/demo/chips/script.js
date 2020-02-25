 export default {
  props: {

  },
  data() {
    return {
      selectedChip:  "2",
      selectedFilterChip: ["1", "2"],
      selectedFilterObjectChip: [{name: "prova 1", code: "1"}, {name: "prova 2", code: "2"}],
      
      chips: [{name: "prova 1", code: "1", icon: "event"}, {name: "prova 2", code: "2"}, {name: "prova 3", code: "3", icon: "favorite"}],
    }
  },
  mounted() {
  
  },
  methods: {
    exampleClickBtn() {
      console.log('bottone cliccato');
    },
  }
}
