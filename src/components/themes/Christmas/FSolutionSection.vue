<script setup>
import MainFirst from "../../../assets/first/christmas.svg";
import FullBackground from "../../shared/FullBackground.vue";
</script>

<template>
        <slot />
        <FullBackground :img="MainFirst"/>
</template>

<style scoped></style>