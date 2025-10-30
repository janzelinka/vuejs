<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'avarage' }">
      <button type="button" @click="activate('avarage')">Avarage</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}

.active {
  border-color: purple;
}

.active button {
  color: purple;
}
</style>
