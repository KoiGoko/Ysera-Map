<template>
  <v-layout>

    <v-main>
      <v-card elevation="0" color="primary" height="40" class="rounded-0 "></v-card>
      <router-view class="map" name="main_view"></router-view>
      <FooterBottom class="foot"></FooterBottom>
    </v-main>
    <router-view class="draw" name="left_draw"></router-view>
  </v-layout>
</template>

<script setup lang="ts">
import FooterBottom from "@/components/main/FooterBottom.vue";
import MapboxMain from "@/components/main/mapbox/index/MapboxMain.vue";
</script>

<style scoped>
html, body {
  height: 100%;
}
.map {
  position: absolute;
  top: 40px;
  width: 100%;
  height:calc(100% - 40px - 74px);
}
</style>
