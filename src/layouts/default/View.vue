<template>
  <v-app class="NotoFont">
    <!--map main-->
    <div>
      <router-view name="map"></router-view>
    </div>

    <!--no map main-->
    <v-main>
      <router-view name="no-map-main"></router-view>
    </v-main>

    <StationInfo></StationInfo>

    <!--left-->
    <div>
      <router-view name="left"></router-view>
    </div>

    <!--right-->
    <div>
      <router-view name="right"></router-view>
    </div>

    <!--top-->
    <div>
      <router-view name="top"></router-view>
    </div>

    <!--bottom-->
    <div>
      <router-view name="bottom"></router-view>
    </div>
  </v-app>
</template>

<script lang="ts" setup>

import StationInfo from "@/components/meteorological/StationInfo.vue";
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&family=Noto+Sans:wght@500&display=swap');

.NotoFont {
  font-family: 'Noto Sans SC', sans-serif;
}
</style>
