<template>
  <section>
    <form></form>
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
