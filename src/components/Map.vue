<template>
  <div>
    <v-map
        ref="mapRef"
        accessToken="pk.eyJ1Ijoia29pZ29rb3JvIiwiYSI6ImNsOXAxZDIzZDA0OHQ0MW1wMHd2Y3Rxa3IifQ.X9ACqkqRQ_m3IvwqsGYy0w"
        :options="options"
    >
    </v-map>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";

const options = reactive({
  center: [120, 30],
  zoom: 5,
  style: 'mapbox://styles/mapbox/streets-v12',
  projection: 'mercator'
})
</script>

<style scoped>

</style>
