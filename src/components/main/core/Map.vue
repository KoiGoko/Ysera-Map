<template>
  <v-map
    ref="mapRef"
    :accessToken="accessToken"
    :options="options"
  >
  </v-map>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {accessToken} from "@/utils/mapUtils"

const options = reactive({
  center: [120, 30],
  zoom: 5,
  style: 'mapbox://styles/mapbox/streets-v12',
  projection: 'mercator'
})
</script>

<style scoped>

</style>
