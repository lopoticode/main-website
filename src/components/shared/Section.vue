<script setup>
import {ref} from 'vue'
</script>

<template>

  <div class="section">
    <div class="content">
      <div class="elm"><slot /></div>
    </div>
  </div>

</template>

<style scoped>

.section {
  position: relative;
}

.content {
  width: 80%;
  height: 100%;
  margin: 0 auto;

}

.elm {
  padding: 64px;
  background: rgba(0, 0, 0, .45);
  border-radius: 16px;
}

</style>