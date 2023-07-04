<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item class="d-flex justify-center" @click="handleClick('index')" value="nuclear">
        <template v-slot:prepend>
          <v-icon class="mr-1" :icon="icons.index"></v-icon>
        </template>
        <v-list-item-title>全球核电</v-list-item-title>
      </v-list-item>
      <v-list-item class="d-flex justify-center" @click="handleClick('land')" value="land">
        <template v-slot:prepend>
          <v-icon class="mr-1" :icon="icons.land"></v-icon>
        </template>
        <v-list-item-title>土地利用</v-list-item-title>
      </v-list-item>
      <v-list-item class="d-flex justify-center" @click="handleClick('elevation')" value="elevation">
        <template v-slot:prepend>
          <v-icon class="mr-1" :icon="icons.elevation"></v-icon>
        </template>
        <v-list-item-title>地形高程</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>


    </v-list>
  </DrawMain>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import DrawMain from "@/components/main/drawer/DrawMain.vue";
import {useDrawerIcons} from "@/utils/useDrawerIcons"

const router = useRouter()
const {icons, toggleIcon} = useDrawerIcons({
  icons: {
    index: 'mdi-map-outline',
    land: 'mdi-tree-outline',
    elevation: 'mdi-landslide-outline'
  },
  activeIcons: {
    index: 'mdi-map',
    land: 'mdi-tree',
    elevation: 'mdi-landslide'
  },
  temp: {
    index: 'mdi-map-outline',
    land: 'mdi-tree-outline',
    elevation: 'mdi-landslide-outline'
  }
})
const handleClick = (name: string) => {
  router.push({
    name
  });
  toggleIcon(name);
}
</script>

<style>
</style>
