<script setup>

import MainDesc from '../../../assets/desc/night.svg'
import FullBackground from "../../shared/FullBackground.vue";

</script>


<template>
  <slot/>

  <FullBackground :img="MainDesc"/>
</template>

<style scoped>
</style>