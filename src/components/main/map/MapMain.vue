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
  <CardMain/>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {accessToken} from "@/utils/mapUtils"
import MapScale from "@/components/main/utils/MapScale.vue";
import SwitchBgMap from "@/components/main/utils/SwitchBgMap.vue";
import MapNavControl from "@/components/main/utils/MapNavControl.vue";
import IndexIsland from "@/components/main/card/index/IndexIsland.vue";
import SearchBox from "@/components/main/card/IslandMain.vue";
import CardMain from "@/components/main/card/CardMain.vue";
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
