<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import '@mapbox-controls/ruler/src/index.css';
import {useMapControl} from "@/store/mapControl.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useConsequenceData} from "@/store/consequenceData.ts";

const mapRef = ref()
const geocoderRef = ref()
const options = computed(
    () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder

const initConsequenceMap = () => {
  const map = mapRef.value.map
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  // useConsequenceData().getDoseData()
}
</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initConsequenceMap"
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
