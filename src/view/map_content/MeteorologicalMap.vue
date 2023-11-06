<script setup lang="ts">
import {computed, ref, toRaw, watch} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const initMeteorologicalMapData = (map: any) => {
  useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)
  map.on('style.load', () => {
    useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)
  });
}
const initMeteorologicalMap = () => {
  const map = mapRef.value.map
  const geocoder = useMapboxGeocoder().geocoder
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  useMapControl().initBaseControl(map)
  initMeteorologicalMapData(map)
}
</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initMeteorologicalMap"
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
