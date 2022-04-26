<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <Header :todo="shop"></Header>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    Header,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  shop: Todo = new Todo("Handla");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
