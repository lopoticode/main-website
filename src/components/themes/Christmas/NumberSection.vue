<script setup>
import FullBackground from "../../shared/FullBackground.vue";
import MainNumber from "../../../assets/number/christmas.svg";
</script>

<template>
        <slot />
  <FullBackground :img="MainNumber" />
</template>

<style scoped>
  img {
    position: absolute;
    bottom: 0;
    right: 0px;
  }
</style>