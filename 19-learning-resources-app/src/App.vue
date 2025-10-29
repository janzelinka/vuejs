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
import ListItem from './components/ListItem.vue';

export default {
  name: 'App',
  components: {
    ListItem,
  },
  data() {
    return {
      resources: [
        {
          id: 1,
          title: 'Vue.js Guide',
          url: 'https://vuejs.org/guide/',
          description: 'The official Vue.js guide.',
        },
        {
          id: 2,
          title: 'Vue Router',
          url: 'https://router.vuejs.org/',
          description: 'The official router for Vue.js.',
        },
        {
          id: 3,
          title: 'Vuex',
          url: 'https://vuex.vuejs.org/',
          description:
            'State management pattern + library for Vue.js applications.',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
