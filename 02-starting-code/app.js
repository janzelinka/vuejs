const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finishing the course and learn basics of Vue! ",
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("#user-goal");
