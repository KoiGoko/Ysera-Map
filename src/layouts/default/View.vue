<template>
  <v-responsive>
    <router-view/>
    <left-bar></left-bar>
    <top-bar></top-bar>
    <bottom-bar></bottom-bar>
    <right></right>
  </v-responsive>
</template>

<script lang="ts" setup>
import TopBar from "@/layouts/default/Top.vue";
import BottomBar from "@/layouts/default/Bottom.vue";
import LeftBar from "@/layouts/default/Left.vue";
import Right from "@/layouts/default/Right.vue";
import Map from "@/components/Map.vue";
</script>

<style scoped>

</style>
