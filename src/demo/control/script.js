 export default {
  props: {

  },
  data() {
    return {
      singleRadioModel: '1',
      singleCheckModel: [],
      singleSwitchModel: true,
      singleSliderModel: 30,
      singleSliderRangeModel: 30,
      singleSliderModelKnobsDiscrete: 'A',
      singleSliderModelKnobs: 50,
      singleSliderModelKnobsRange: [50, 70],
      
    }
  },
  mounted() {
  
  },
  methods: {
    exampleClickBtn() {
      console.log('bottone cliccato');
    },
    onValidateData() {
      
    },

    }
}
