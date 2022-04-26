<template>
  <p>Antal click: {{ numberOfClicks }}</p>
  <div>
    <h4>{{ todo.text }}</h4>
    <p>Klar: {{ todo.done }}</p>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    todo: Todo,
  },
})
export default class Header extends Vue {
  todo!: Todo;
  numberOfClicks = 0;

  mounted() {
    console.log("Start", this.todo);
    this.numberOfClicks++;
  }
}
</script>

<style lang="scss"></style>
