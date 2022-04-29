<template>
  <ul>
    <li v-for="(n, i) in numbers" :key="i">
      {{ n }}
    </li>
  </ul>

  <ShowPerson v-for="(p, i) in persons" :person="p" :key="i"></ShowPerson>
</template>

<script lang="ts">
import { Person } from "@/models/Person";
import { Options, Vue } from "vue-class-component";
import ShowPerson from "./ShowPerson.vue";

@Options({
  components: {
    ShowPerson,
  },
})
export default class ShowLists extends Vue {
  numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];

  persons: Person[] = [
    new Person("Sebastian", 42),
    new Person("Hanna", 42),
    new Person("Astrid", 11),
    new Person("Alvar", 11),
  ];
}
</script>

<style lang="scss" scoped></style>
