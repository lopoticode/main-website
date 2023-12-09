<script setup>

import {ref} from "vue"
import { useWindowScroll, useEventListener, useIntervalFn } from '@vueuse/core'

const { x: xWindow, y: yWindow } = useWindowScroll()

const props = defineProps({
  catImgFirst: String,
  catImgSecond: String,
  stripFirst: String,
  stripSecond: String
})

const images = [props.catImgFirst, props.catImgSecond]
const requiredTime = 100;

const selectedImageIndex = ref(0);
const selectedStripIndex = ref(0);

const selectedImage = ref(props.catImgFirst)
const selectedStrip = ref(props.stripFirst)

const cat = ref();

const changedValue = ref(new Date().getTime())

const changeImage = () => {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % 2
    selectedImage.value = images[selectedImageIndex.value]
    changedValue.value = new Date().getTime();
}

useEventListener(document, 'scroll', (evt) => {
  cat.value.style.top = 100 + yWindow.value + 'px';

  if((new Date().getTime() - changedValue.value) > requiredTime) {
    changeImage();
  }

  if(yWindow.value >= window.innerHeight * .95) {
    cat.value.style.top = yWindow.value + (window.innerHeight / 2) + 'px';
  }
  
})

const changeStrip = () => {
    useIntervalFn(() => {
        const stripList = [props.stripFirst, props.stripSecond]

        selectedStripIndex.value = (selectedStripIndex.value + 1) % 2

        selectedStrip.value = stripList[selectedStripIndex.value]
    }, 1000)
}


changeStrip()
</script>


<template>

    <div class="fb-container">
        <div class="fb-content">
            <img class="fb-lineImage" :src="selectedStrip" alt="Line Image" />
            <img class="fb-catImage" :src="selectedImage" alt="Cat" ref="cat"/>
        </div>
    </div>


</template>

<style scoped>

    .fb-container {
        position: relative;
        transition: .2s position ease-in;
    }

    .fb-lineImage, .fb-catImage {
        position: absolute;
        left: calc(50% - 25px);
        top: 100px;

        transform: translate(0%, -50%);
        
        transition: .05s all ease-in;
    }

    .fb-catImage {
        width: 50px;
        height: 50px;
    }

    .fb-
    Image {
        height: fit-content;
        width: 15px;
    }

</style>