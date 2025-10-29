<template>
  <ul>
    <list-item
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    />
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'App',
  components: {
    ListItem,
  },
  props: {
    resources: {
      type: Array,
      required: true,
    },
  },
};
</script>
