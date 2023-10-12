<script setup lang="ts">
import {ref, computed} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
import MapControls from "@/components/control/MapControls.vue";
const mapRef = ref()
const options = computed(
    () => useMapOption().options
)
const initNuclearMap = () => {
  const map = mapRef.value.map
  useNuclearStationsInfo().initNuclearStationsMap(map)
}
</script>
<template>
  <v-map
        ref="mapRef"
        :options="options"
        @loaded="initNuclearMap"
    >
    <MapControls/>
  </v-map>
</template>
<style scoped>
</style>
