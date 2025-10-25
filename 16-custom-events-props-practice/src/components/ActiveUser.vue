<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
