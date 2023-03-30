<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {accessToken} from "@/utils/mapUtils"
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
        projection: 'mercator',
      }"
    >
      <v-geo-source
        id="points"
        data="http://127.0.0.1:8000/index/index_geojson/"
      />
      <v-circle-layer
        id="circle"
        source="points"
        :paint="{
          'circle-color': '#f00',
          'circle-radius': 5,
        }"
      />
    </v-map>
  </div>
</template>

<style scoped>
</style>

