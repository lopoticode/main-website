<script setup>
import MainSecond from "../../../assets/second/night.svg";
import FullBackground from "../../shared/FullBackground.vue";
</script>

<template>
  <slot/>
  <FullBackground :img="MainSecond"/>
</template>

<style scoped></style>