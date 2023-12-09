<script setup>
const props = defineProps({
  img: String
})
</script>

<template>
  <div class="background">
    <img :src="img" alt="background">
  </div>
</template>

<style scoped>

.background {


  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: -1;
}

img {
  position: relative;
  bottom: -6px;
  width: 100%;
  height: 100%;

  z-index: -1;
}

</style>