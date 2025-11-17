<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" v-model="user" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      users: ['First', 'Second', 'Other'],
    };
  },
  methods: {
    addUser() {
      this.users.push(this.user);
    },
    removeUser(user) {
      this.users = this.users.filter((x) => x != user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>
