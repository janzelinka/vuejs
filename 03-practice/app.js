const app = Vue.createApp({
    data() {
        return {
            age: 33,
            name: 'Jan Zelinka',
            imageUrl: 'https://imgv3.fotor.com/images/share/various-random-images-in-all-types-from-fotor-random-image-generator.jpg',
            favoriteNumber: Math.random()
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
        handleChange(data) {
            this.name = data.target.value;
        }
    }
})

app.mount("#assignment")