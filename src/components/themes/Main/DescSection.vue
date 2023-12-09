<script setup>

import MainDesc from '../../../assets/desc/main.svg'
import Background from "../../shared/Background.vue";

</script>


<template>
  <slot/>

  <Background :img="MainDesc"/>
</template>

<style scoped>
</style>