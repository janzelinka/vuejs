<template>
  <base-card>
    <base-button
      @click="selectTab('stored-resources')"
      :flat="selectedTab === 'stored-resources' ? true : false"
      >Stored Resources</base-button
    >
    <base-button
      @click="selectTab('add-resources')"
      :flat="selectedTab === 'add-resources' ? true : false"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component
      :is="
        selectedTab === 'stored-resources'
          ? 'learning-resources-list'
          : 'add-resource'
      "
    ></component>
  </keep-alive>
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
    return { resources: this.resources, addResource: this.addResource };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: this.resources.length + 1,
        title,
        description,
        url,
      };
      this.resources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>
