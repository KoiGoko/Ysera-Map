<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
import MapControls from "@/components/control/MapControls.vue";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";

const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder

const initNuclearMap = () => {
  const map = mapRef.value.map

  useMapControl().initRulerControl(map)
  useMapControl().initZoomControl(map)
  useMapControl().initImageControl(map)

  geocoderRef.value.appendChild(geocoder.onAdd(map));
  useNuclearStationsInfo().initNuclearStationsMap(map)
  map.on('style.load', () => {
    useNuclearStationsInfo().initNuclearStationsMap(map)
    console.log('style loaded')
  });
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
  <div class="geocoder" ref="geocoderRef"></div>
</template>
<style scoped>
.geocoder {
  position: absolute;
  top: 16px;
  left: 96px;
}
</style>
