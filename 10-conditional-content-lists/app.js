const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
    },
  },
});

app.mount("#user-goals");
