<script setup lang="ts">
import {ref, computed} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
import MapControls from "@/components/control/MapControls.vue";
import {useMapControl} from "@/store/mapControl.ts";

const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)


import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from "mapbox-gl";

const initNuclearMap = () => {
  const map = mapRef.value.map

  computed(() => useMapControl().initRulerControl(map))
  // useMapControl().initZoomControl(map)
  // useMapControl().initImageControl(map)


  const geocoder = new MapboxGeocoder({
    accessToken: 'pk.eyJ1Ijoia29pZ29rb3JvIiwiYSI6ImNsOXAxZDIzZDA0OHQ0MW1wMHd2Y3Rxa3IifQ.X9ACqkqRQ_m3IvwqsGYy0w',
    mapboxgl: mapboxgl
  });

  geocoderRef.value.appendChild(geocoder.onAdd(map));


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

  <div id="geocoder" class="geocoder" ref="geocoderRef"></div>
  <v-card class="coordinates" height="36" width="192">

  </v-card>

</template>
<style scoped>
#geocoder {
  position: absolute;
  top: 8px;
  left: 400px;
}

.coordinates {
  position: absolute;
  bottom: 100px;
  left: 300px;
}
</style>
