<template>
  <section>
    <header><slot name="header"></slot></header>
    <slot></slot>
  </section>
</template>

<script>
export default {
  slots: ["default", "header"],
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
