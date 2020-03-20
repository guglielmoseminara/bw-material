 export default {
  props: {

  },
  data() {
    return {
      isMenuOpen: false,
      open: false,
      provaItems: [
        {name: 'button doc', href: 'button' },
        {
          name: "label 2",
          children: [
            {name: "lamel 2.1", href: 'button' },
            {name: "lamel 2.2", href: 'button'}
          ]
        },
        {
          name: "label 3",
          children: [
            {
              name: "lamel 3.1",
              children: [
                {name: "lamel 3.1.1", href: 'button' },
                {name: "lamel 3.1.2", href: 'button' }
              ]
            },
            {name: "lamel 4", href: 'button'  }
          ]
        },
      ]
    }
  },
  mounted() {
  
  },
  methods: {

  }
}
