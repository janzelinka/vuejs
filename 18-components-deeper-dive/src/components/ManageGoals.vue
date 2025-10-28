<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Add Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid"> test </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const data = this.$refs.goal.value;
      if (data === "") {
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>
