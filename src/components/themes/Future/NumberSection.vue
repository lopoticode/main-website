<script setup>
import {ref} from "vue";

import Background from "../../shared/Background.vue";
import CatNumber from "../../../assets/number/future.svg";
import {useIntervalFn} from "@vueuse/core";

const cat = ref();

const slideCat = () => {
  let addValue = 10;

  useIntervalFn(() => {
    const right = () => +cat.value.style.right.replace("px", "")

    if(right() + addValue >= window.innerWidth - 176) {
      addValue *= -1;
      cat.value.style.right = right() + addValue + "px"
    }

    if(right() + addValue <= -1) {
      addValue *= -1;
    }

    cat.value.style.right = right() + addValue + "px"
  }, 30)
}

slideCat()
</script>

<template>
        <slot />
  <img :src="CatNumber" alt="" ref="cat">
</template>

<style scoped>
  img {
    height: 256px;
    position: absolute;
    bottom: 4px;
    right: 0;
    transition: .2s all ease-in-out;
  }
</style>