<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import MapControls from "@/components/control/MapControls.vue";
import {GeoJsonLayer} from "@deck.gl/layers";
import {MapboxLayer} from "@deck.gl/mapbox";
import {Deck} from "@deck.gl/core";
import {useMapControl} from "@/store/mapControl.ts";
import {useNuclearStationsInfo} from "@/store/nuclearStationsInfo.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMapbox3DBuilds} from "@/store/Mapbox3DBuilds.ts";

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
  map.addLayer(deckMapBoxLayer)
  map.on('style.load', () => {
    deckMapBoxLayer()
  })
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
