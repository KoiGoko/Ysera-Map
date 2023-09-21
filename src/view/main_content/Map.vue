<template>
  <div>
    <v-map
        ref="mapRef"
        :accessToken="accessToken"
        :options="options"
        @loaded="initMap"
    >
      <AttributionControl/>
      <NavigationControl/>
      <ScaleControl/>
    </v-map>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, onMounted} from "vue";
import {useAccessToken} from '@/store/accessToken.ts'
import {useMapStyle} from '@/store/mapStyle.ts'
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import AttributionControl from "@/components/control/map/AttributionControl.vue";
import NavigationControl from "@/components/control/map/NavigationControl.vue";
import ScaleControl from "@/components/control/map/ScaleControl.vue"

const accessToken = computed(
    () => useAccessToken().token
)
const mapStyle = computed(
    () => useMapStyle().mapStyle
)
const options = ref({
  style: mapStyle,
  center: [116, 39],
  zoom: 6,
  projection: "mercator",
})
const mapRef = ref()

const initMap = (mapRef: any) => {
  useMeteorologicalStationsInfo().initMap(mapRef)
}
/*let initialCircleRadius = 4;*/
/*const initMap = () => {
  const map = mapRef.value.map
  map.addSource('stations', {
    'type': 'geojson',
    'data': 'http://127.0.0.1:8000/hello'
  });
  map.addLayer({
    'id': 'stations-maker',
    'type': 'circle',
    'source': 'stations',
    'paint': {
      'circle-radius': initialCircleRadius,
      'circle-color': '#223ab4'
    },
  });
  map.on('zoom', () => {
    // 获取当前地图层级
    const currentZoom = map.getZoom();
    const roundedZoom = Math.floor(currentZoom);
    let radius = 0
    if (roundedZoom < 5) {
      radius = 3
    } else if (roundedZoom < 7) {
      radius = 4
    } else if (roundedZoom < 9) {
      radius = 6
    } else if (roundedZoom < 11) {
      radius = 8
    } else {
      radius = 10
    }
    console.log(roundedZoom)
    map.setPaintProperty('stations-maker', 'circle-radius', radius);
  });

  // const language = new MapboxLanguage();
  // let zh = 12
  // setInterval(function () {
  //   map.setStyle(language.setLanguage(map.getStyle(), language.supportedLanguages[zh]));
  // });
}*/
</script>
<style scoped>
</style>
