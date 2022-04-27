<template>
  Child works: {{ greeting }} - {{ age }}
  <div>
    <h4>{{ person.name }}</h4>
    <p>{{ person.age }} - {{ person.isMarried }}</p>
  </div>
</template>

<script lang="ts">
import { Person } from "@/models/Person";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Child extends Vue {
  @Prop() greeting!: string;
  @Prop() age!: number;
  @Prop() person!: Person;
}
</script>

<style scoped lang="scss"></style>
