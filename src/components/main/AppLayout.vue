<template>
  <v-app>
    <Bar></Bar>
    <v-main>
      <Map class="Map"/>
      <div class="account-bar">
        <v-btn>
          <v-icon icon="mdi-account" class="rounded-circle"></v-icon>
        </v-btn>
      </div>

      <div class="search-bar">
        <v-card width="300" height="48"></v-card>
      </div>

      <div class="switch-map-bar">
        <v-card width="64" height="64"></v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Map from "@/components/main/core/Map.vue";
import Bar from "@/components/main/sidebar/Bar.vue";
</script>
<style>
.account-bar {
  position: absolute;
  right: 20px;
  top: 20px;
}
.search-bar {
  position: absolute;
  top: 20px;
  left: 84px;
}
.switch-map-bar{
  position: absolute;
  bottom: 10px;
  left: 84px;
}
body {
  overflow-y: hidden;
}
</style>
