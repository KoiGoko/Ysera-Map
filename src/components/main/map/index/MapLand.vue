<template>
  <v-map
    ref="mapRef"
    :accessToken="accessToken"
    :options="options"
  >
    <MapScale/>
    <SwitchBgMap @receiveChild="receiveChild"/>
    <v-vector-source
      id="mapbox-terrain"
      :tiles="[
          'https://api.maptiler.com/maps/97d05326-b3ca-4b19-97df-969a34169ee3/style.json?key=uebNbI6Q96mqTrReSadC',
        ]"
    />
    <v-fill-layer
      id="landcover"
      source="mapbox-terrain"
      sourceLayer="landcover"
      :paint="{
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }"
    />
    <v-fill-layer
      id="hillshade"
      source="mapbox-terrain"
      sourceLayer="hillshade"
      :paint="{
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }"
    />
    <v-line-layer
      id="contour"
      source="mapbox-terrain"
      sourceLayer="contour"
      :paint="{
        'line-color': '#ffffff',
      }"
    />
    <div class="scale-button d-flex flex-column justify-center align-center">
      <v-btn @click="zoomIn" icon="mdi-plus"></v-btn>
      <v-btn @click="zoomOut" icon="mdi-reduce"></v-btn>
    </div>
  </v-map>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {accessToken} from "@/utils/mapUtils"
import MapScale from "@/components/main/utils/MapScale.vue";
import SwitchBgMap from "@/components/main/utils/SwitchBgMap.vue";

const options = reactive({
  center: [120, 30],
  zoom: 5,
  projection: 'mercator'
})
const mapRef = ref();

function zoomIn() {
  options.zoom++
}

function zoomOut() {
  options.zoom--
}

function receiveChild(value: string) {
  options.style = value;
}

</script>

<style scoped>
.scale-button {
  position: absolute;
  bottom: 160px;
  right: 20px;
}

</style>
