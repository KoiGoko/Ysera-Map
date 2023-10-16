<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import MapControls from "@/components/control/MapControls.vue";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import CoordinatesCard from "@/components/bar/CoordinatesCard.vue";
import * as turf from '@turf/turf'

const draw = useMapboxDraw().draw
const mapRef = ref()
const geocoderRef = ref()

const options = computed(
    () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder
const initMeteorologicalMap = async () => {
  const map = mapRef.value.map
  useMapControl().initRulerControl(map)
  useMapControl().initZoomControl(map)
  useMapControl().initImageControl(map)
  map.addControl(draw)
  geocoderRef.value.appendChild(geocoder.onAdd(map));
  useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)



  map.on('style.load', () => {
    useMeteorologicalStationsInfo().initMeteorologicalStationsMap(map)
    console.log('style loaded')
  });
  map.on('draw.create', function (e: any) {

    const coordinates = e.features[0].geometry.coordinates.slice();

    console.log(coordinates)
    const center = [coordinates[0], coordinates[1]];
    const radius = 100;
    const circle = turf.circle(center, radius);

    map.addSource('polygon', {
      type: 'geojson',
      data: circle,
    })

    map.addLayer({
      id: 'polygon',
      type: 'fill',
      source: 'polygon',
      paint: {
        'fill-color': '#880049',
        'fill-opacity': 0.7,
      },
    });






    // turf.bbox(e.features[0]);
    console.log('draw.create')
  });
}

</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initMeteorologicalMap"
  >
    <MapControls/>
    <CoordinatesCard></CoordinatesCard>
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
