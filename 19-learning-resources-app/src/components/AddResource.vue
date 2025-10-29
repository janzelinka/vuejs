<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="url" />
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <teleport to="body">
    <base-modal v-if="inputIsInvalid">
      <template #header>Validation</template>
      <template #default><p>Please fill in all fields.</p></template>
      <template #actions>
        <base-button @click="inputIsInvalid = false">Close</base-button>
      </template>
    </base-modal>
  </teleport>
</template>
<script>
import BaseModal from './ui/BaseModal.vue';
export default {
  components: { BaseModal },
  inject: ['addResource'],
  data() {
    return { inputIsInvalid: false };
  },
  methods: {
    submitForm() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const url = this.$refs.url.value;

      if (!title.trim() || !description.trim() || !url.trim()) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(title, description, url);
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
