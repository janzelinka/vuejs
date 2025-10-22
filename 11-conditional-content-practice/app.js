const app = Vue.createApp({
  data() {
    return {
      task: "",
      tasks: [],
      isListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
  },
  computed: {
    buttonCaption() {
      return this.isListVisible ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
