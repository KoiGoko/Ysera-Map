<template>
  <v-app>
    <Bar></Bar>
    <v-main>
      <Map class="Map"/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Map from "@/components/main/core/Map.vue";
import Bar from "@/components/main/sidebar/Bar.vue";
</script>
<style>

</style>
