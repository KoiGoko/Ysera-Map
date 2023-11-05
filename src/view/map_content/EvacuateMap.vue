<script setup lang="js">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";


const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)


const initEvacuateMap = () => {
  const geocoder = useMapboxGeocoder().geocoder
  const map = mapRef.value.map
  map.addControl(useMapControl().initBaseControl(map))
  map.getContainer().style.width = '600px'
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  setTimeout(() => {
    map.resize();
  }, 200);
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
  left: 96px;
}
</style>
