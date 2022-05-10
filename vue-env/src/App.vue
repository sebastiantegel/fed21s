<template>
  <input type="text" v-model="search" />
  <button @click="handleSearch">Search</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { MovieService } from "./services/MovieService";

@Options({
  components: {},
})
export default class App extends Vue {
  search = "";

  mounted() {
    console.log(process.env.VUE_APP_API_URL);
  }

  handleSearch() {
    let service = new MovieService();
    service.getMovies(this.search).then((movies) => {
      console.log(movies);
    });
  }
}
</script>

<style lang="scss"></style>
