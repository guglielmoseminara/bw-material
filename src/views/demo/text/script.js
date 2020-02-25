export default {
  inject: ['$validator'],
  props: {

  },
  data() {
    return {
      textFieldModel: '',
      formOptions: {
        validateAfterChanged: false,
        validateAsync: true,
        validationScope: 'examplescope',
      },
      schemaText: {
        groups: [
          {
            fields: [
              {
                id: "prova id",
                type: "bw_text",
                inputType: 'text',
                placeholder: "prova placeholder",
                textLabel: "prova",
                color: "primary",
                attrs: [{ "outlined": true }, { "textarea": true }, { "maxlength": 20 }, { "minlength": 2 },], // textarea
                model: "text1",
                rules: "required"

              },
              {
                id: "prova id2",
                type: "bw_text",
                inputType: 'text',
                placeholder: "prova2 placeholder",
                textLabel: "prova",
                color: "primary",
                attrs: [{ "maxlength": 20 }, { "minlength": 2 },], // textarea
                model: "text2",
                rules: "required|min:5"
              },
            ]
          }
        ]
      },
      modelText: {
        text1: "",
        text2: "",
      },
    }
  },
  mounted() {

  },
  methods: {
    onValidateData() {
      
    },
    submitTextForm() {
      this.$validator.validate('examplescope.*').then(valid => {
        if (!valid) {
          // do stuff if not valid.
        }
      }).catch(() => {
      });
    },
  }
}
