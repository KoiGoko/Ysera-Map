<template>
  <div>
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options=state.mapOptions
      @loaded="fetchData"
    >
      <v-geo-source
        id="nuclear-stations"
        :data=data
        :cluster="true"
        :clusterRadius="50"
      />

      <v-circle-layer
        id="nuclear-stations-circle"
        source="nuclear-stations"
        :filter="['has', 'point_count']"
        :paint="{
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            20,
            '#f1f075',
            60,
            '#f28cb1',
            100,
            '#e20656',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            20,
            30,
            60,
            40,
            100,
            50,
          ],
        }"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
      <v-symbol-layer
        id="cluster-count"
        source="nuclear-stations"
        :filter="['has', 'point_count']"
        :layout="{
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        }"
      />
      <v-circle-layer
        id="uncluster-point"
        source="nuclear-stations"
        :filter="['!', ['has', 'point_count']]"
        :paint="{
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        }"
        @click="handleClickPoint"
      />
<!--      <v-popup-->
<!--        :visible="state.popupOptions.visible"-->
<!--        :center="state.popupOptions.center"-->
<!--      >-->
<!--        {{ state.popupOptions.content }}-->
<!--      </v-popup>-->
      <MapScale></MapScale>
      <MapNavControl></MapNavControl>
      <SwitchBgMap @switch-map="receiveChild">
      </SwitchBgMap>
    </v-map>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import axios from "axios";
import MapScale from "@/components/main/utils/MapScale.vue";
import SwitchBgMap from "@/components/main/utils/SwitchBgMap.vue";
import MapNavControl from "@/components/main/utils/MapNavControl.vue";
import {accessToken} from "@/utils/mapUtils"
let style = ref('mapbox://styles/mapbox/light-v11');
const mapRef = ref()
const data = reactive({
  features: []
});
let state = reactive({
  mapOptions: {
    style: style,
    projection: 'mercator',
  },
  popupOptions: {
    visible: false,
    center: undefined,
    content: "",
  },
});

async function fetchData() {
  // const map = mapRef.value.map
  // map.setLayoutProperty('country-label', 'text-field', ['get', 'name_zh']);
  // map.setLanguage('zh-Hans');
  try {
    const response = await axios.get('http://127.0.0.1:8000/index/index_geojson')
    data.features = response.data.features
    console.log(mapRef.value.map)
  } catch (error) {
    console.error(error)
  }
}
function receiveChild(value: string) {
  style.value = value;
  watch(style, fetchData)
}

const handleClick = (e) => {
  const map = e.target;
  console.log(e.target)
  const features = map.queryRenderedFeatures(e.point, {
    layers: ["nuclear-stations-circle"],
  });
  const clusterId = features[0].properties.cluster_id;
  map
    .getSource("nuclear-stations")
    .getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) return;
      map.easeTo({
        center: features[0].geometry.coordinates,
        zoom: zoom,
      });
    });
};
const handleMouseEnter = (e) => {
  e.target.getCanvas().style.cursor = "pointer";
};

const handleMouseLeave = (e) => {
  e.target.getCanvas().style.cursor = "";
};

const handleClickPoint = (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  state.popupOptions.visible = true;
  state.popupOptions.content = data.features[0].name;
  state.popupOptions.center = coordinates;
};
</script>

<style scoped>
.switch-map {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>

