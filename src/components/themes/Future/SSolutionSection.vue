<script setup>
import MainSecond from "../../../assets/second/future.svg";
import Background from "../../shared/Background.vue";
</script>

<template>
  <slot/>
  <Background :img="MainSecond"/>
</template>

<style scoped></style>