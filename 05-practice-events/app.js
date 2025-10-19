const app = Vue.createApp({
    data() {
        return {
            input: ''
        }
    },
    methods: {
        showAlert() {
            alert("Hello world")
        },
        handleInput(e) {
            this.input = e.target.value;
        }
    }
});

app.mount("#assignment")