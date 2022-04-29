<template>
  <div>
    <h3>{{ person.name }}</h3>
    <span>{{ person.age }}</span>
  </div>
</template>

<script lang="ts">
import { Person } from "@/models/Person";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class ShowPerson extends Vue {
  @Prop() person!: Person;
}
</script>

<style lang="scss" scoped></style>
