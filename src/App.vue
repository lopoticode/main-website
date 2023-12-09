<script setup>
import { ref } from 'vue';

import TopBar from './components/shared/TopBar/TopBar.vue'

import MainTheme from './components/themes/Main/MainTheme.vue'
import NightTheme from "./components/themes/Night/NightTheme.vue";
import ChristmasTheme from "./components/themes/Christmas/ChristmasTheme.vue";
import FutureTheme from "./components/themes/Future/FutureTheme.vue";

import AOS from 'aos'
AOS.init();

const actualTheme = ref("main")
const themeList = {
  "main": MainTheme,
  "christmas": ChristmasTheme,
  "night": NightTheme,
  "future": FutureTheme
}

const backgroundList = {
  "main": ["FDCF5D", "C383CE"],
  "christmas": ["AF1A38", "155730"],
  "night": ["76B6C4", "054273"],
  "future": ["C8C7C1", "220000"]
}

const firstBackground = () => backgroundList[actualTheme.value][0];
const secondBackground = () => backgroundList[actualTheme.value][1];

const themeChanged = e => {
   actualTheme.value = e
  console.log(actualTheme.value)
  document.documentElement.style.backgroundImage = `linear-gradient(0deg, ${'#'+firstBackground()} 0%,  ${'#'+secondBackground()} 100%)`;
}


document.addEventListener('konami', () => {
  actualTheme.value = "night"
  themeChanged("night")
  window.open('./tetris/')
})


themeChanged('main')
</script>

<template>
  <div class="content">
    <TopBar @theme="themeChanged" class="topbar" :theme="actualTheme" />

    <template v-for="(value, key) in themeList">
      <div v-if="actualTheme === key">
        <component :is="value" />
      </div>
    </template>


  </div>
</template>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  top: 0;
}

.topbar {
  margin: 28px 24px;
}
</style>

<style scoped>

html {
  background: v-bind(firstBackground);
}

</style>