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
    }
  }
});

app.mount('#events');
