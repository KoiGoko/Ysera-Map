<script setup lang="js">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";

import {MapboxOverlay} from '@deck.gl/mapbox';
import {TripsLayer} from '@deck.gl/geo-layers';


const DATA_URL =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json";
const LOOP_LENGTH = 1800;
const VENDOR_COLORS = [
  [255, 0, 0],
  [0, 0, 255], // vendor #1
]


let currentTime = 0;
const props = {
  id: "trips",
  data: DATA_URL,
  getPath: (d) => d.path,
  getTimestamps: (d) => d.timestamps,
  getColor: (d) => VENDOR_COLORS[d.vendor],
  opacity: 1,
  widthMinPixels: 2,
  trailLength: 180,
  currentTime,
  shadowEnabled: false,
}

const overlay = new MapboxOverlay({});
const animate = () => {
  currentTime = (currentTime + 1) % LOOP_LENGTH;
  const tripsLayer = new TripsLayer({
    ...props,
    currentTime,
  });
  overlay.setProps({
    layers: [tripsLayer],
  });
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);


const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const initEvacuateMap = () => {
  const geocoder = useMapboxGeocoder().geocoder
  const map = mapRef.value.map
  useMapControl().initRulerControl(map)
  useMapControl().initZoomControl(map)
  useMapControl().initImageControl(map)
  map.addControl(overlay)
  geocoderRef.value.appendChild(geocoder.onAdd(map));
}
</script>
<template>
  <v-map
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
