<script setup>

import MainHero from '../../../assets/hero/main.svg'
import Background from "../../shared/Background.vue";

</script>

<template>
  <slot/>

  <Background :img="MainHero" />
</template>

<style scoped>
</style>