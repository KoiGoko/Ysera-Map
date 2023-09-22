<script setup lang="ts">
import {ref, computed} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import MapControls from "@/components/control/MapControls.vue";

const mapRef = ref()

const options = computed(
    () => useMapOption().options
)
const initMap = () => {
  const map = mapRef.value.map
  console.log(map)
  useMeteorologicalStationsInfo().initMap(map)
}
</script>
<template>
  <v-map
        ref="mapRef"
        :options="options"
        @loaded="initMap"
    >
    <MapControls/>
  </v-map>
</template>
<style scoped>
</style>
