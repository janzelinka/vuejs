<template>
  <li>
    <div>
      <header>
        <h3>{{ resource.title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ resource.description }}</p>
    <nav>
      <a :href="resource.url">View resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    resource: {
      type: {
        url: String,
        title: String,
        description: String,
      },
      required: true,
    },
  },
};
</script>
