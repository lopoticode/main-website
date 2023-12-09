<script setup>
import {ref} from 'vue'

import rMain from '../../../assets/t-right/main.svg'
import rNight from '../../../assets/t-right/night.svg'
import rChristmas from '../../../assets/t-right/christmas.svg'
import rFuture from '../../../assets/t-right/future.svg'

const emit = defineEmits(['theme'])

const props = defineProps({
  themeName: String,
  img: String
})

const changeTheme = (e) => {
  e.preventDefault();
  emit('theme', props.themeName)
}

const rightImages = {
  "main": rMain,
  "night": rNight,
  "christmas": rChristmas,
  "future": rFuture
}


</script>

<template>
  <img :src="rightImages[props.themeName]" alt="theme Image" @click="changeTheme">
</template>

<style scoped>

img {
  height: 32px;
  margin-top: -8px;
  cursor: pointer;
}

</style>