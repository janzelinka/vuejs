<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)" v-if="selectedTopicId() !== id">
      Learn More
    </button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic', 'selectedTopicId'],
  props: ['id', 'topicName', 'description'],
};
</script>
