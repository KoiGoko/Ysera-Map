<script setup lang="ts">
import {ref, computed} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import MapControls from "@/components/control/MapControls.vue";
import {GeoJsonLayer} from "@deck.gl/layers";
import {MapboxLayer} from "@deck.gl/mapbox";
import { Deck } from "@deck.gl/core";

const mapRef = ref()
const options = computed(
    () => useMapOption().options
)

const initMap = () => {
  const deckMapBoxLayer = new MapboxLayer({
    id: 'deck-geojson-layer',
    type: GeoJsonLayer,
    data: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
    filled: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: d => [245, 133, 5, 0],
    getLineColor: d => [245, 245, 245],
    getLineWidth: 1,
  })
  const map = mapRef.value.map
  map.addLayer(deckMapBoxLayer)
  console.log(map)
}
</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initMap"
  >
    <MapControls/>
  </v-map>
</template>
<style scoped>
</style>
