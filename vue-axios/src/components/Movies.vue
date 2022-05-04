<template>
  <div
    v-for="m in movies"
    :key="m.imdbID"
    @click="
      () => {
        handleClick(m.imdbID);
      }
    "
  >
    <h4>{{ m.Title }}</h4>
    <img :src="m.Poster" :alt="m.Title" />
  </div>
</template>

<script lang="ts">
import { IMovie } from "@/models/IMovie";
import { Vue } from "vue-class-component";
// import axios from "axios";
// import { IOmdbResponse } from "@/models/IOmdbResponse";
import { MovieService } from "@/services/MovieService";

export default class Movies extends Vue {
  movies: IMovie[] = [];

  mounted() {
    // axios
    //   .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=Star")
    //   .then((response) => {
    //     this.movies = response.data.Search;
    //   });

    let service = new MovieService();
    service.getMovies().then((movies) => {
      this.movies = movies;
    });
  }

  handleClick(id: string) {
    let service = new MovieService();
    service.getMovieById(id).then((movie) => {
      console.log(movie.imdbRating);
    });
  }
}
</script>

<style scoped></style>
