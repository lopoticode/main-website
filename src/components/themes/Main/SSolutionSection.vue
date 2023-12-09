<script setup>
import MainSecond from "../../../assets/second/main.svg";
import Background from "../../shared/Background.vue";
</script>

<template>
  <slot/>
  <Background :img="MainSecond"/>
</template>

<style scoped></style>