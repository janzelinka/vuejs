<template>
  <ul>
    <li v-for="(goal, index) in goals" :key="index">
      <slot :item="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        "Finish the course and learn Vue!",
        "Master Vue and build amazing apps",
      ],
    };
  },
};
</script>
