<template>
  <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
  >
    <v-list nav>
      <left-list></left-list>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer
      location="left"
      width="72"
      temporary
      permanent
  >
    <v-list>
      <v-btn class="rounded-circle mt-0" width="large" height="large" variant="plain">
        <v-icon size="x-large" @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import LeftList from "@/components/bar/LeftList.vue";

const drawer = ref(false);
const group = ref<string | null>(null);


watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>

</style>
