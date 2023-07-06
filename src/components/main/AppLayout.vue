<template>
  <v-app>
    <AppBar/>
    <LeftBar/>
    <v-main class="bg-grey-lighten-3">
      <v-card elevation="1" height="90%" class="ml-lg-5 mt-lg-5 mr-lg-5 rounded-0">
        <router-view class="map" name="main_view"/>
      </v-card>
    </v-main>
  </v-app>

</template>

<script setup lang="ts">
import AppBar from "@/components/main/appbar/BarApp.vue";
import LeftBar from "@/components/main/sidebar/BarLeft.vue";

import {ref, onMounted} from "vue";

const tab = ref()
onMounted(() => {
  const tab_height = tab.value.$el.clientHeight
  document.documentElement.style.setProperty('--appbar-height', `${tab_height}px`);
  document.documentElement.style.setProperty('--draw-width', `50px`);
})
</script>
<style scoped>
html, body {
  height: 100%;
}

.map {
  position: absolute;
  top: var(--tab-height);
  /*地图计算宽度减去左侧抽屉宽度*/
  width: calc(100% - var(--draw-width));
  height: calc(100% - var(--tab-height));
}

/*隐藏地图logo和版权信息*/
/deep/ .mapboxgl-ctrl-logo {
  display: none !important;
}

/deep/ .mapboxgl-ctrl-attrib {
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
