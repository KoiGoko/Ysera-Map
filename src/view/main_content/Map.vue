<template>
  <div>
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="options"
      @loaded="initMap"
    >
      <v-attribution-control
        id="attribution-control-id"
        compact="compact"
        customAttribution="customAttribution"
        position="bottom-right"
      />

      <v-scale-control
        id="scale-control-id"
        unit="unit"
        position="bottom-right"
      />

      <v-navigation-control
        id="navigation-control-id"
        position="bottom-right"
      />
    </v-map>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, onMounted} from "vue";
import {useAccessToken} from '@/store/accessToken.ts'
import {useMapStyle} from '@/store/mapStyle.ts'

import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

var Draw = new MapboxDraw();
const accessToken = useAccessToken().token
const mapStyle = computed(
  () => useMapStyle().mapStyle
)
const options = ref({
  style: mapStyle,
  center: [116, 39],
  zoom: 6,
  projection: "mercator",
})

let initialCircleRadius = 4;
onMounted(() => {
  const map = mapRef.value.map
  map.resize()
  console.log('map 改变大小')
})

const initMap = () => {
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

  map.addControl(Draw, 'bottom-right');

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
}

watch(mapStyle, (newStyle, oldStyle) => {
  console.log('hello')
});

const mapRef = ref()

</script>
<style scoped>
</style>
