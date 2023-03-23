<template>
  <div>
    <button @click="add">bus+1</button>
  </div>
</template>

<script>
import { bus } from "./bus";

export default {
  methods: {
    add() {
      bus.emit("add");
    },
  },
};
</script>

<style>
</style>