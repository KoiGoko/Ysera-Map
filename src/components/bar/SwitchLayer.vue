<script setup lang="ts">
import {ref} from "vue"

const layerSelected = ref(false)

</script>

<template>
  <v-btn @click="layerSelected = !layerSelected" width="64" height="64">
  </v-btn>
  <div class="ml-2" v-show="layerSelected">
    <v-btn width="64" height="64" variant="outlined">
      <span>卫星影像</span>
    </v-btn>
    <v-btn width="64" height="64" variant="outlined">
      <span>地形高程</span>
    </v-btn>
    <v-btn width="64" height="64" variant="outlined">
      <span>土地利用</span>
    </v-btn>
    <v-btn width="64" height="64" variant="outlined">
      <span>卫星影像</span>
    </v-btn>
  </div>
</template>

<style scoped>
</style>
