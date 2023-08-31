<template>
  <div>
    <v-map
        ref="mapRef"
        :accessToken="accessToken"
        :options="options"
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
import {ref, computed} from "vue";
import { useAccessToken } from '@/store/accessToken'
import { useMapStyle } from '@/store/mapStyle'
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

</script>
<style scoped>
</style>
