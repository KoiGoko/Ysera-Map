<template>
  <div class="container">
    <!--land use-->
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="{
        center: [120, 30],
        zoom: 4,
        style: 'mapbox://styles/mapbox/satellite-v9',
        projection: 'mercator'
      }"
    >
      <v-scale-control position="top-left">
      </v-scale-control>
      <v-raster-source
        id="tiles"
        :tiles="[
          'mapbox://mapbox.satellite',
        ]"
        :tileSize="256"
      />
      <v-raster-layer id="tiles" source="tiles" />
    </v-map>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {accessToken} from "@/utils/mapUtils"
</script>

<style scoped>
</style>

