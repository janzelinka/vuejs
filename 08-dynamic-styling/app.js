const app = Vue.createApp({
     data() {
        return {
            boxSelected: false
        }
     },
     computed: {
        boxStyle() {
            return { active: this.boxSelected }
        }
     }
});

app.mount("#styling")