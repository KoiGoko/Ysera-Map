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

  <v-navigation-drawer
      class="px-0"
      location="left"
      width="80"
      permanent
  >
    <v-list nav>
      <v-list-item>
        <v-btn
            @click.stop="drawer = !drawer"
            icon
            variant="text"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-list-item class="mb-4">
            <v-btn icon variant="tonal"
                   v-bind="props"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </v-list-item>
        </template>

        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar

              >
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <h3>Nan Jia</h3>
              <p class="text-caption mt-1">
                KoiGoko@outlook.com
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  rounded
                  variant="text"
              >
                <span>编辑</span>
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  rounded
                  variant="text"
              >
                <span>退出</span>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();

const drawer = ref(false);
const drawerRight = ref(false);
const group = ref<string | null>(null);

watch(group, () => {
  drawer.value = false;
  drawerRight.value = false;
});
const atmosphereItems = ref([
  {text: 'Uploads', icon: 'mdi-upload', to: '/Uploads'},
  {text: 'Backups', icon: 'mdi-cloud-upload', to: '/Backups'},
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
