<template>
  <div>
    <AddMovie @addMovie="handleAddMovie($event)" />

    <div v-for="(movie, i) in movies" :key="i">
      {{ movie.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Movie } from "@/models/Movie";
import { Options, Vue } from "vue-class-component";
import AddMovie from "./AddMovie.vue";

@Options({
  components: {
    AddMovie,
  },
})
export default class Movies extends Vue {
  movies: Movie[] = [
    new Movie("Harry Potter", 100, ""),
    new Movie("Legally Blonde", 100, ""),
    new Movie("Dirty Dancing", 100, ""),
  ];

  handleAddMovie(m: Movie) {
    console.log("Hello from movies", m);
    // this.movies.splice(0, 1);
    this.movies.push(m);
  }
}
</script>

<style scoped></style>
