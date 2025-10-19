const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    computed: {
        message() {
            return this.number < 37 ? "Not there yet." : "Too much."
        }
    },
    methods: {
        add(number) {
            this.number+=number;
        }
    },
    watch: {
        message(value) {
            window.timeout = setTimeout(() => {
                this.number = 0;
                clearTimeout(window.timeout);
            }, 5000)
        }
    }
});

app.mount("#assignment")