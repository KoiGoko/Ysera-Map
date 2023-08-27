<template>
  <v-responsive>
    <router-view/>
    <left-bar></left-bar>
    <top-bar></top-bar>
    <bottom-bar></bottom-bar>
  </v-responsive>
</template>

<script lang="ts" setup>


import TopBar from "@/layouts/default/TopBar.vue";
import BottomBar from "@/layouts/default/BottomBar.vue";
import LeftBar from "@/layouts/default/LeftBar.vue";
</script>

<style scoped>

</style>
