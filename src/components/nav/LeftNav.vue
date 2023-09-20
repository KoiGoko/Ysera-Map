<template>
  <v-navigation-drawer
      location="left"
      temporary
      v-model="drawer"
  >
    <v-list
        :lines="false"
        density="compact"
        nav
    >
      <v-list-item-subtitle>
        <span class="font-weight-bold text-black">Ysera灾害分析系统</span>
      </v-list-item-subtitle>
      <v-list-item
          v-for="(item, i) in nuclearItems"
          :key="i"
          :value="item"
          color="primary"
          class="mt-2"
          @click="navigateToRoute(item.to)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title class="font-weight-medium" v-text="item.text"></v-list-item-title>
      </v-list-item>
      <v-divider class="mt-2 mx-1"></v-divider>
      <v-list-item
          v-for="(item, i) in atmosphereItems"
          :key="i"
          :value="item"
          color="primary"
          class="mt-2"
          @click="navigateToRoute(item.to)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title class="font-weight-medium" v-text="item.text"></v-list-item-title>
      </v-list-item>
      <v-divider class="mt-2 mx-1"></v-divider>
    </v-list>
  </v-navigation-drawer>

  <DefaultNav></DefaultNav>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRouter} from "vue-router";
import DefaultNav from "@/components/nav/DefaultNav.vue";


const router = useRouter();

const drawer = ref(false);
const drawerRight = ref(false);
const group = ref<string | null>(null);

watch(group, () => {
  drawer.value = false;
  drawerRight.value = false;
});
const atmosphereItems = ref([
  {text: '大气科学', icon: 'mdi-upload', to: '/Uploads'},
  {text: '数据科学', icon: 'mdi-cloud-upload', to: '/Backups'},
]);

const nuclearItems = ref([
  {text: '台站信息', icon: 'mdi-home', to: '/station'},
]);

watch(group, () => {
  drawer.value = false;
});

// 点击事件处理函数，用于导航到指定路由
const navigateToRoute = (to:any) => {
  router.push(to);
};
</script>

<style scoped>
</style>
