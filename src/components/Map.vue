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
import {useAccessToken} from '@/store/accessToken'
import {useMapStyle} from '@/store/mapStyle'

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

  // 添加地图缩放事件监听器，监听地图层级的变化
  map.on('zoom', () => {
    // 获取当前地图层级
    const currentZoom = map.getZoom();

    // // 根据地图层级动态更新 circle-radius 的大小
    // // 这里你可以根据你的需求定义不同的规则来更新大小
    // // 例如，将 initialCircleRadius 与 currentZoom 相关联
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
    //
    // // 更新图层的 circle-radius
    map.setPaintProperty('stations-maker', 'circle-radius', radius);
  });
}

watch(mapStyle, (newStyle, oldStyle) => {
  console.log('hello')
});


const mapRef = ref()

</script>
<style scoped>
</style>
