<template>
  <Loader v-if="isLoading"></Loader>
  <div v-else>
    <ShowLists></ShowLists>
    <ShowStyles></ShowStyles>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Loader from "./components/Loader.vue";
import ShowStyles from "./components/ShowStyles.vue";
import ShowLists from "./components/ShowLists.vue";

@Options({
  components: {
    HelloWorld,
    ShowStyles,
    Loader,
    ShowLists,
  },
})
export default class App extends Vue {
  isLoading = true;
  n = 10;

  mounted() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 400);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
