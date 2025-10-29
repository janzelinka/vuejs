<template>
  <li>
    <a :href="resource.url" target="_blank" rel="noopener">{{
      resource.title
    }}</a>
  </li>
</template>

<script>
export default {
  props: {
    resource: {
      type: {
        url: String,
        title: String,
      },
      required: true,
    },
  },
};
</script>
