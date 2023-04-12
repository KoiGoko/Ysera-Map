<template>
  <div>
    <!--全球核电站-->
    <v-map
      class="map"
      ref="mapRef"
      :accessToken="accessToken"
      :options=state.mapOptions
    >
      <v-geo-source
        id="earthquakes"
        :data=data
        :cluster="true"
        :clusterMaxZoom="16"
        :clusterRadius="50"
      />
      <v-circle-layer
        id="clusters"
        source="earthquakes"
        :filter="['has', 'point_count']"
        :paint="{
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            30,
            '#f1f075',
            50,
            '#f28cb1',
            80,
            '#e20656',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        }"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
      <v-symbol-layer
        id="cluster-count"
        source="earthquakes"
        :filter="['has', 'point_count']"
        :layout="{
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        }"
      />
      <v-circle-layer
        id="uncluster-point"
        source="earthquakes"
        :filter="['!', ['has', 'point_count']]"
        :paint="{
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        }"
        @click="handleClickPoint"
      />
      <v-popup
        :visible="state.popupOptions.visible"
        :center="state.popupOptions.center"
      >
        {{ state.popupOptions.content }}
      </v-popup>
      <MapScale></MapScale>
      <MapNavControl></MapNavControl>
      <SwitchBgMap @switch-map="receiveChild"></SwitchBgMap>
    </v-map>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

import MapScale from "@/components/main/utils/MapScale.vue";
import SwitchBgMap from "@/components/main/utils/SwitchBgMap.vue";
import MapNavControl from "@/components/main/utils/MapNavControl.vue";

import {accessToken} from "@/utils/mapUtils"
const mapRef = ref();
let style = ref('mapbox://styles/mapbox/satellite-v9');
let data = ref('http://127.0.0.1:8000/index/index_geojson/');

function receiveChild(data) {
  style.value = data
}
let state = reactive({
  mapOptions: {
    style: style,
    center: [-103.5917, 40.6699],
    projection: 'mercator',
    zoom: 4,
  },
  popupOptions: {
    visible: false,
    center: undefined,
    content: "",
  },
});

const handleClick = (e) => {
  const map = e.target;
  const features = map.queryRenderedFeatures(e.point, {
    layers: ["clusters"],
  });
  const clusterId = features[0].properties.cluster_id;
  map
    .getSource("earthquakes")
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
  const mag = e.features[0].properties.mag;
  const tsunami = e.features[0].properties.tsunami === 1 ? "yes" : "no";

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  state.popupOptions.visible = true;
  state.popupOptions.content = `magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`;
  state.popupOptions.center = coordinates;
};
</script>

<style scoped>
</style>

