const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  // computed: {
  //   fullName() {
  //     if (this.name === '')
  //       return '';
  //     return this.name + ' ' + "zeLo"
  //   },
  // },
  watch: {
    name(value, oldValue) {
      this.fullname = value == "" ? "" : value + " Zelo";
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
