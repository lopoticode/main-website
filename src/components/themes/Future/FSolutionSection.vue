<script setup>
import MainFirst from "../../../assets/first/future.svg";
import Background from "../../shared/Background.vue";
</script>

<template>
        <slot />
        <Background :img="MainFirst"/>
</template>

<style scoped></style>