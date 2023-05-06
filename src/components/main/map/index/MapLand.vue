<template>
  <div>
    <MapMain>
<!--      <v-raster-source-->
<!--        id="tiles"-->
<!--        :tiles="[-->
<!--          'http://localhost:8089/data/beijingesa/{z}/{x}/{y}.png',-->
<!--        ]"-->
<!--      />-->
<!--      <v-raster-layer id="tiles" source="tiles" />-->
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
