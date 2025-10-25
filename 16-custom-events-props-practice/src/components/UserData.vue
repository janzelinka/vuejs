<template>
  <section>
    <form @submit.prevent="addUser">
      <label for="userName">User name:</label>
      <input name="userName" id="userName" v-model="userName" />
      <label for="age">Age:</label>
      <input name="age" type="number" id="age" v-model="age" />

      <input type="submit" />
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      age: 0,
    };
  },
  methods: {
    addUser() {
      const { userName, age } = this;
      this.$emit("add-user", { userName, age });
    },
  },
};
</script>
