<template>
  <div>
    <MapMain>
      <v-raster-source
        id="tiles"
        :tiles="[
          'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
        ]"
      />
      <v-raster-layer id="tiles" source="tiles"/>
    </MapMain>
    <RightFunctionMain/>
  </div>
</template>

<script setup lang="ts">
import MapMain from "@/components/main/map/MapMain.vue";
import RightFunctionMain from "@/components/main/utils/RightFunctionMain.vue";
</script>

<style scoped>
</style>


