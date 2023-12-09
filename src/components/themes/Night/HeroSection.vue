<script setup>

import MainHero from '../../../assets/hero/night.svg'
import FullBackground from "../../shared/FullBackground.vue";

</script>

<template>
  <FullBackground :img="MainHero" />

  <div class="content">
    <slot/>
  </div>

</template>

<style scoped>
</style>