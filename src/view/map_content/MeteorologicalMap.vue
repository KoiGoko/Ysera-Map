<script setup lang="ts">
import {computed, ref, toRaw, watch} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
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
  console.log('initMeteorologicalMap')
  map.on('draw.create', async function (e: any) {

    // eslint-disable-next-line vue/return-in-computed-property
    const drawMode = draw.getMode()
    console.log(drawMode)

    const coordinates = e.features[0].geometry.coordinates.slice();

    const currZoomMeteorologicalStationInfos = computed(() => useMeteorologicalStationsInfo().currZoomMeteorologicalStationInfos)


    if (drawMode === 'draw_point') {

      const data = computed(() => useMeteorologicalStationsInfo().getMeteorologicalStationsData())

      console.log(data)

      console.log(coordinates)
      const center = [coordinates[0], coordinates[1]];
      const radius = 100;
      const circle = turf.circle(center, radius);
      // console.log(currZoomMeteorologicalStationInfos.value)

      const currMeteorologicalStationsBbox = turf.bbox(circle)

      const pointInsides = ref([])

      currZoomMeteorologicalStationInfos.value.filter((item: any) => {
        const point = turf.point([item.longitude, item.latitude])
        const centerPoint = turf.point(center)
        const pointInside = turf.distance(point, centerPoint, {units: 'kilometers'})
        if (pointInside <= radius) {
          pointInsides.value.push(item)
        }
      })
      console.log(pointInsides.value)


      console.log(currMeteorologicalStationsBbox)

      map.addSource('polygon', {
        type: 'geojson',
        data: circle,
      })
      map.addLayer({
        id: 'polygon',
        type: 'line',
        source: 'polygon',
        paint: {
          'line-color': '#4d042b',  // 使用 line-color 定义线的颜色
          'line-opacity': 1,  // 使用 line-opacity 定义线的透明度
          'line-width': 2,  // 使用 line-width 定义线的宽度
        },
      });
    }

    if (drawMode === 'draw_rectangle') {
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
        type: 'line',
        source: 'polygon',
        paint: {
          'line-color': '#4d042b',  // 使用 line-color 定义线的颜色
          'line-opacity': 1,  // 使用 line-opacity 定义线的透明度
          'line-width': 2,  // 使用 line-width 定义线的宽度
        },
      });
    }

    if (drawMode === 'draw_polygon') {
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
    }
  });
}

</script>
<template>
  <v-map
      ref="mapRef"
      :options="options"
      @loaded="initMeteorologicalMap"
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
