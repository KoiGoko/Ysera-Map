<template>
  <v-layout>
    <v-main>
      <v-card elevation="0" color="primary" height="35" class="rounded-0 ">
      </v-card>
      <router-view class="map" name="main_view"></router-view>
      <FooterBottom></FooterBottom>
    </v-main>
    <router-view class="draw" name="left_draw"></router-view>
  </v-layout>
</template>

<script setup lang="ts">
import FooterBottom from "@/components/main/FooterBottom.vue";
</script>
<style scoped>
html, body {
  height: 100%;
}
.map {
  position: absolute;
  top: 35px;
  /*地图计算宽度减去左侧抽屉宽度*/
  width: calc(100% - 50px);
  height:calc(100% - 35px - 74px);
}
/*隐藏地图logo和版权信息*/
/deep/.mapboxgl-ctrl-logo {
    display: none !important;
}
/deep/.mapboxgl-ctrl-attrib {
    display: none !important;
}
/*调整遮挡层级*/
.draw {
  z-index: 1;
}
.map {
  z-index: 0;
}
</style>
