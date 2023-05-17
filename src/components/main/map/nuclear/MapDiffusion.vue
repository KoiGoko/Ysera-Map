<template>
  <div>
    <v-map ref="mapRef"/>
  </div>
</template>

<script setup lang="ts">
import MapMain from "@/components/main/map/MapMain.vue";
import {ref} from "vue";
const mapRef = ref();
console.log(mapRef.value)
</script>

<style scoped>
</style>

