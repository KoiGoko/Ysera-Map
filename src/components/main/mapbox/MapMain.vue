<template>
  <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="options"
      @loaded="initMap"
  >
    <slot></slot>
    <MapScale/>
    <SwitchBgMap @receiveChild="receiveChild"/>
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
  style: 'mapbox://styles/mapbox/light-v11',
  projection: 'mercator'
})
const mapRef = ref();

function receiveChild(value: string) {
  options.style = value;
}

function initMap() {
  const map = mapRef.value.map;
  map.setLayoutProperty('country-label', 'text-field', ['get', 'name_zh']);
  map.setLanguage('zh-Hans');
}
</script>

<style scoped>

</style>
