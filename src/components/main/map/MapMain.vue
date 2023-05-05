<template>
  <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="options"
  >
    <slot></slot>
    <MapScale/>
    <SwitchBgMap @receiveChild="receiveChild"/>
    <MapNavControl/>
  </v-map>
  <SearchPage/>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {accessToken} from "@/utils/mapUtils"
import MapScale from "@/components/main/utils/MapScale.vue";
import SwitchBgMap from "@/components/main/utils/SwitchBgMap.vue";
import MapNavControl from "@/components/main/utils/MapNavControl.vue";
import SearchPage from "@/components/main/card/index/SearchPage.vue";
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

</script>

<style scoped>

</style>
