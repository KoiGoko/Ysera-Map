<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import MapControls from "@/components/control/MapControls.vue";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMapbox3DBuilds} from "@/store/Mapbox3DBuilds.ts";
import {useTripsData} from "@/store/tripsData.ts";

const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder


const initEvacuateMap = () => {
  const map = mapRef.value.map

  useMapControl().initRulerControl(map)
  useMapControl().initZoomControl(map)
  useMapControl().initImageControl(map)
  geocoderRef.value.appendChild(geocoder.onAdd(map));

  useTripsData().evacuateTrips(map)

  useMapbox3DBuilds().initMapbox3DBuilds(map)
}
</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initEvacuateMap"
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
