<template>
  <div :class="[{ box: isActive }, 'round']" @click="isActive = !isActive">
    Lorem ipsum
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ShowStyles extends Vue {
  isActive = true;
  //   round = "round";
}
</script>

<style lang="scss" scoped>
.box {
  height: 25vh;
  width: 25%;
  border: 1px solid green;
}

.round {
  border-radius: 10px;
}
</style>
