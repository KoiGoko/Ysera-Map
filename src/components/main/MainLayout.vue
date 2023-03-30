<template>
  <v-layout>
    <FooterBottom></FooterBottom>
    <v-main>
      <router-view name="main_view"></router-view>
      <router-view name="second"></router-view>
    </v-main>
    <router-view name="left_draw"></router-view>
  </v-layout>
</template>

<script setup lang="ts">
import FooterBottom from "@/components/main/FooterBottom.vue";
import MapboxMain from "@/components/main/mapbox/index/MapboxMain.vue";
</script>

<style scoped>

</style>
