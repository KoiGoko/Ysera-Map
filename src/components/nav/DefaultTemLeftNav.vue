<script setup lang="ts">
import {computed} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();
import {useLeftNavList} from "@/store/LeftNavList.ts";
import {useLeftDrawer} from "@/store/LeftDrawer.ts";

const atmosphereItems = computed(() => useLeftNavList().atmosphereItems)
const nuclearItems = computed(() => useLeftNavList().nuclearItems)
const evacuateItems = computed(() => useLeftNavList().evacuateItems)
const drawerValue = computed(() => useLeftDrawer().drawer)

const navigateToRoute = (to: any) => {
  router.push(to);
};
const toggleDrawer = () => {
  useLeftDrawer().toggleDrawer()
}
</script>
<template>
  <v-navigation-drawer
      location="left"
      temporary
      v-model="drawerValue"
      @update:modelValue="toggleDrawer"
      color="background"
  >
    <v-list
        :lines="false"
        density="compact"
        nav
    >
      <v-list-item-title>
        <span class="ml-1 text-h6">Ysera Nuclear Map</span>
      </v-list-item-title>
      <v-list-item
          v-for="(item, i) in nuclearItems"
          :key="i"
          :value="item"
          class="mt-2"
          @click="navigateToRoute(item.to)"
          variant="text"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>
          <span>{{item.text}}</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          v-for="(item, i) in atmosphereItems"
          :key="i"
          :value="item"
          class="mt-2"
          @click="navigateToRoute(item.to)"
          variant="text"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>
          <span>{{item.text}}</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          v-for="(item, i) in evacuateItems"
          :key="i"
          :value="item"
          class="mt-2"
          @click="navigateToRoute(item.to)"
          variant="text"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title class="font-weight-medium">
          <span>{{item.text}}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
