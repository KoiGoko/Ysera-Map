<script setup lang="ts">
import {computed, ref, toRaw, watch} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import {cloneNode} from "@babel/types";


const mapRef = ref()
const geocoderRef = ref()

const options = computed(
    () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder
const initControlAndDraw = (map: any) => {
  const draw = useMapboxDraw().draw
  useMapControl().initBaseControl(map)
  useMapboxDraw().drawEvent(map)
  useMapboxDraw().getMapInstance(map)
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  map.addControl(draw)
}
const initMeteorologicalMapData = (map: any) => {
  useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)
  map.on('style.load', () => {
    useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)
  });
}
const initMeteorologicalMap = async () => {
  const map = mapRef.value.map
  initControlAndDraw(map)
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
  left: 96px;
}
</style>
