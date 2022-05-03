<template>
  <div>
    <form @submit.prevent=""></form>

    <input
      type="text"
      placeholder="Filmtitel"
      v-model="movieTitle"
      @keypress.enter="handleClick"
    />
    <!-- <button
      @click="
        () => {
          handleClick();
        }
      "
    >
      Lägg till film
    </button> -->
  </div>
</template>

<script lang="ts">
import { Movie } from "@/models/Movie";
import { Vue } from "vue-class-component";

export default class AddMovie extends Vue {
  movieTitle = "";

  handleClick() {
    console.log("Du klickade", this.movieTitle);
    this.$emit("addMovie", new Movie(this.movieTitle, 200, ""));
  }
}
</script>

<style scoped></style>
