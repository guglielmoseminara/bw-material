export default {
  props: {

  },
  data() {
    return {      
      date: new Date(),
      dateRange: { "start": new Date(), "end": new Date('01-01-2022') },

      textFieldModel: 'example',
      multiselectModel: [ "a10", "a30" ],
      multiselectModel2: [{"name": "prova 20", code: "20", id: 'a20'}, ],


      selectModel: 'a20',
      selectModel2: {"name": "prova 20", code: "20", id: 'a20'},
      
      selectModel3: {"name": "prova 20", code: "20"},
      
      selectOptions: [
        {"name": "prova 10", code: "10", id: 'a10'}, 
        {"name": "prova 20", code: "20", id: 'a20'}, 
        {"name": "prova 30", code: "30", id: 'a30'},

      ]
    }
  },
  mounted() {

  },
  methods: {
  
  },
  computed: {
    errorMessage() {
      if (!this.date) return 'Date is required.';
      return '';
    },
  },
}
