const app = Vue.createApp({
    data() {
        return {
            input: '',
            enteredValue: ''
        }
    },
    methods: {
        showAlert() {
            alert("Hello world")
        },
        handleInput(e) {
            this.input = e.target.value;
        },
        handleEnter(e) {
            this.enteredValue = e.target.value;
        }
    }
});

app.mount("#assignment")