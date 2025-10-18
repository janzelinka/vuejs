const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "<p>Finishing the course and learn basics of Vue!</p>",
      courseGoalB: "<p>Learn .NET!</p>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal");
