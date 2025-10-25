<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <button @click="deleteFriend">Delete</button>
    </ul>
  </li>
</template>

<script>
// Available types
// String

// Number

// Boolean

// Array

// Object

// Date

// Function

// Symbol

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, //can be also function
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  // emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing");
        return false;
      }
    },
    "delete-friend": function (id) {
      if (id) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
