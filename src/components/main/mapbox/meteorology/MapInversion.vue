<script setup lang="ts">
import { ref } from "vue";
import {accessToken} from "@/utils/mapUtils"
import * as turf from "@turf/turf"
const mapRef = ref();
</script>

<template>
  <div class="container">
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="{
        center: [120, 30],
        zoom: 10,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        projection: 'mercator'
      }"
    />
  </div>
</template>

<style scoped>
</style>

