const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finishing the course and learn basics of Vue! ",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn vue";
      } else {
        return "Master vue";
      }
    }
  }
});

app.mount("#user-goal");
