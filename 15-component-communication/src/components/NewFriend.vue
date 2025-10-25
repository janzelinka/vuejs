<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label for="email">Email</label>
      <input id="email" name="email" v-model="friend.email" />
    </div>
    <div>
      <label for="name">Name</label>
      <input id="name" name="name" v-model="friend.name" />
    </div>

    <div>
      <label for="phoneNumber">Phone number</label>
      <input id="phoneNumber" name="phoneNumber" v-model="friend.phoneNumber" />
    </div>

    <div>
      <label for="isFavorite">Is Favorite</label>
      <input
        id="isFavorite"
        name="isFavorite"
        type="checkbox"
        v-model="friend.isFavorite"
      />
    </div>

    <input type="submit" />
  </form>
</template>

<script>
export default {
  emits: ["add-new-friend"],
  data() {
    return {
      friend: {
        email: "",
        phoneNumber: "",
        name: "",
        isFavorite: false,
      },
    };
  },
  methods: {
    addNewFriend() {
      this.$emit("add-new-friend", this.friend);
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
