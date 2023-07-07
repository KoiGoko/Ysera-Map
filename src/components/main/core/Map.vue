<template>
  <v-map
    ref="mapRef"
    :accessToken="accessToken"
    :options="options"
  >
    <slot></slot>
    <MapScale/>
    <SwitchBgMap @receiveChild="receiveChild"/>
    <div class="scale-button d-flex flex-column justify-center align-center">
      <v-btn width="36" height="36" class="mb-2" @click="zoomIn" icon="mdi-plus"></v-btn>
      <v-btn width="36" height="36" @click="zoomOut" icon="mdi-minus"></v-btn>
    </div>
  </v-map>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {accessToken} from "@/utils/mapUtils"
import MapScale from "@/components/main/tools/MapScale.vue";
import SwitchBgMap from "@/components/main/tools/SwitchBgMap.vue";

const options = reactive({
  center: [120, 30],
  zoom: 5,
  style: 'mapbox://styles/mapbox/light-v11',
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
