<script setup lang="js">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
const mapRef = ref()
const geocoderRef = ref()
const options = computed(
  () => useMapOption().options
)
const initEvacuateMap = () => {
  const map = mapRef.value.map
  const geocoder = useMapboxGeocoder().geocoder
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  useMapControl().initBaseControl(map)
}
</script>
<template>
  <v-map class="map-wrapper"
         ref="mapRef"
         :options="options"
         @loaded="initEvacuateMap"
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
