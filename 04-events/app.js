const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    remove(num) {
      this.counter-=num;
    },
    saveInput(event, str) {
      this.name = event.target.value + str;
    },
    handleSubmit() {
      console.log('hello world')
    }
  }
});

app.mount('#events');
