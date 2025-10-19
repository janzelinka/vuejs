const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      this.counter++;
    },
    handleRemove() {
      this.counter--;
    }
  }
});

app.mount('#events');
