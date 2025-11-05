<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchSurveyResults()"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <div v-if="isLoading">Loading...</div>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  mounted() {
    this.fetchSurveyResults();
  },
  methods: {
    async fetchSurveyResults() {
      this.isLoading = true;
      try {
        const response = await fetch(
          'https://zelovue-default-rtdb.firebaseio.com/surveys.json'
        );
        const data = await response.json();

        const surveyResults = [];
        this.isLoading = false;
        for (const key in data) {
          const resultObj = {
            id: key,
            name: data[key].name,
            rating: data[key].rating,
          };
          surveyResults.push(resultObj);
        }

        this.results = surveyResults;
      } catch (error) {
        console.error('Error fetching survey results:', error);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
