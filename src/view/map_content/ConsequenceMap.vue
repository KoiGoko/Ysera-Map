<script setup lang="ts">
import {ref, computed} from "vue";
import {useMapOption} from "@/store/mapOption.ts";
import MapControls from "@/components/control/MapControls.vue";
import MapSwitch from "@/components/bar/MapSwitch.vue";
const mapRef = ref()
import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';
const options = computed(
    () => useMapOption().options
)
</script>
<template>
  <v-map
        ref="mapRef"
        :options="options"
    >
    <MapControls/>
  </v-map>
  <MapSwitch></MapSwitch>
</template>
<style scoped>
</style>
