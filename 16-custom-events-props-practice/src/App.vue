<template>
  <div>
    <user-data @add-user="addUser"></user-data>
    <section>
      <active-user
        v-for="(user, key) of users"
        :key="key"
        :user-name="user.userName"
        :age="user.age"
      ></active-user>
    </section>
  </div>
</template>

<script>
export default {
  template: `test`,
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    },
  },
};
</script>
