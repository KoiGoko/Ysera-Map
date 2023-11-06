<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const initNuclearMap = () => {
  const map = mapRef.value.map
  const geocoder = useMapboxGeocoder().geocoder
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  useMapControl().initBaseControl(map)
  useNuclearStationsInfo().initNuclearStationsMap(map)
  map.on('style.load', () => {
    useNuclearStationsInfo().initNuclearStationsMap(map)
  });
}
</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initNuclearMap"
  >
  </v-map>
  <div class="geocoder" ref="geocoderRef"></div>
</template>
<style scoped>
.geocoder {
  position: absolute;
  top: 16px;
  left: 16px;
}
</style>
