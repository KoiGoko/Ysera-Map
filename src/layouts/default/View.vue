<template>
  <v-responsive>
      <router-view/>
      <TopBar/>
      <v-spacer/>
      <BottomBar/>
  </v-responsive>
</template>

<script lang="ts" setup>
//
import LeftSearch from "@/components/LeftSearch.vue";
import TopBar from "@/layouts/default/TopBar.vue";
import BottomBar from "@/layouts/default/BottomBar.vue";
</script>
