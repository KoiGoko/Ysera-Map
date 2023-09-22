<script setup lang="ts">
import {ref, computed} from "vue";
import {useAccessToken} from '@/store/accessToken.ts'
import {useMapStyle} from '@/store/mapStyle.ts'

const accessToken = computed(
    () => useAccessToken().token
)
const mapStyle = computed(
    () => useMapStyle().mapStyle
)
const options = ref({
  accessToken: accessToken,
  style: mapStyle,
  center: [116, 39],
  zoom: 6,
  projection: "mercator",
})
</script>
<template>
  <v-map
      :options="options"
  >
  </v-map>
</template>
