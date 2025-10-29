<template>
  <base-card>
    <base-button @click="selectTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="selectTab('add-resources')">Add Resource</base-button>
  </base-card>

  <component
    :is="
      selectedTab === 'stored-resources'
        ? 'learning-resources-list'
        : 'add-resource'
    "
  ></component>
</template>

<script>
import AddResource from './AddResource.vue';
import LearningResourcesList from './LearningResourcesList.vue';

export default {
  components: {
    LearningResourcesList,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return { resources: this.resources };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
