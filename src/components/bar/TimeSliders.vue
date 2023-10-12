<script setup lang="ts">
import {ref} from "vue";

const icon = ref({
  stopIcon: "mdi-account",
  playIcon: "mdi-home",
})
const timeSliderSwitch = () => {
  // 切换函数
}
</script>
<template>
  <v-card color="primary" class="rounded-lg" max-height="120" max-width="500" elevation="0">
    <v-card-item class="d-flex justify-center align-center">
      <v-btn color="primary" variant="flat" icon="mdi-play"></v-btn>
      <v-btn color="primary" variant="flat" icon="mdi-pause"></v-btn>
    </v-card-item>
    <v-card-item class="mb-4">
      <v-progress-linear model-value="20"></v-progress-linear>
    </v-card-item>
  </v-card>
</template>
<style scoped>
</style>
