<template>
  <v-layout>
    <v-main>
      <TabMain ref="tab"/>
      <router-view class="map" name="main_view">
      </router-view>
      <FooterBottom ref="footer"/>
      <router-view class="draw" name="left_draw"/>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import FooterBottom from "@/components/main/FooterBottom.vue";
import TabMain from "@/components/main/tab/TabMain.vue";
import {ref, onMounted} from "vue";
const tab = ref()
const footer = ref()
onMounted(() => {
  const tab_height = tab.value.$el.clientHeight
  const footer_height = footer.value.$el.clientHeight
  document.documentElement.style.setProperty('--tab-height', `${tab_height}px`);
  document.documentElement.style.setProperty('--draw-width', `50px`);
  document.documentElement.style.setProperty('--footer-height', `${footer_height}px`);
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
  height:calc(100% - var(--tab-height));
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
