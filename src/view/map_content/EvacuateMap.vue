<script setup lang="js">
import {computed, ref} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import {useMapControl} from "@/store/mapControl.ts";
import {useMapboxGeocoder} from "@/store/MapboxGeocoder.ts";
import {useMapbox3DBuilds} from "@/store/Mapbox3DBuilds.ts";
import {useTripsData} from "@/store/tripsData.ts";

import {MapboxOverlay as DeckOverlay} from '@deck.gl/mapbox';
import {GeoJsonLayer, ArcLayer} from '@deck.gl/layers';

const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';


const deckOverlay = new DeckOverlay({
  layers: [
    new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: f => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick: info =>
        // eslint-disable-next-line
        info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
    }),
    new ArcLayer({
      id: 'arcs',
      data: AIR_PORTS,
      dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
      // Styles
      getSourcePosition: f => [-0.4531566, 51.4709959], // London
      getTargetPosition: f => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1
    })
  ]
});


const mapRef = ref()
const geocoderRef = ref()
const options = computed(
  () => useMapOption().options
)
const geocoder = useMapboxGeocoder().geocoder


const initEvacuateMap = () => {
  const map = mapRef.value.map
  map.addControl(deckOverlay)
  // useMapControl().initRulerControl(map)
  // useMapControl().initZoomControl(map)
  // useMapControl().initImageControl(map)
  // geocoderRef.value.appendChild(geocoder.onAdd(map));
  //
  // useTripsData().evacuateTrips(map)
  //
  // useMapbox3DBuilds().initMapbox3DBuilds(map)
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
