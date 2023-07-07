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
</script>
<style>
</style>
