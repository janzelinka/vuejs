<template>
  <li>
    <header>
      <h2>{{ friend.name }}</h2>
    </header>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone: </strong> {{ friend.phone }}</li>
      <li><strong>E-mail: </strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "friend-component",
  props: {},
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: "peter",
        name: "Pitr",
        phone: "0908844785",
        email: "pitr@superstar.sk",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
};
</script>
