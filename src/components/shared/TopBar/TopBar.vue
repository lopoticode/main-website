<script setup>
import lMain from '../../../assets/t-left/main.svg'
import lNight from '../../../assets/t-left/night.svg'
import lChristmas from '../../../assets/t-left/christmas.svg'
import lFuture from '../../../assets/t-left/future.svg'


import ThemeButton from './ThemeButton.vue';

const emit = defineEmits(['theme'])

const props = defineProps({
    theme: String
})

const changeTheme = (e) => {
    emit('theme', e)
}

const leftImages = {
    "main": lMain,
    "night": lNight,
    "christmas": lChristmas,
    "future": lFuture
}

</script>

<template>
    <div class="container">
        <div class="content">
            <img class="icon" :src="leftImages[props.theme]" alt="icon">
            <div class="right-bar">
                <div class="theme-bar">
                    <ThemeButton @theme="changeTheme" theme-name="main" class="invert" />
                    <ThemeButton @theme="changeTheme" theme-name="christmas"/>
                    <ThemeButton @theme="changeTheme" theme-name="future"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    width: calc(100% - 48px);
    height: 64px;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    z-index: 99;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.right-bar {
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
    width: calc(96px * 3);
}

.theme-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.icon {
    margin-left: 3.5%;
    height: 64px;;
}

.invert {
  filter: invert(1);
}
</style>