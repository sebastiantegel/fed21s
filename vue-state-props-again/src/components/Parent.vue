<template>
  <Child :greeting="someText" :age="myAge" :person="me" />

  <div :id="myAge.toString()"></div>

  <button @click="handleClick" :disabled="me.isMarried">Ändra text</button>
</template>

<script lang="ts">
import { Person } from "@/models/Person";
import { Options, Vue } from "vue-class-component";
import Child from "./Child.vue";

@Options({
  components: { Child },
})
export default class Parent extends Vue {
  someText = "Hej";
  myAge = 42;
  me: Person = new Person("Sebastian", 42, true);

  handleClick() {
    this.someText = "lorem ipsum";
    this.myAge = 43;
    this.me.name = "Hanna";
  }
}
</script>

<style scoped lang="scss"></style>
