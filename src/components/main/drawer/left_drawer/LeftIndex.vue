<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="handleClick('index')" :prepend-icon="icons.index" title="全球核电"
                   value="nuclear"></v-list-item>
      <v-list-item @click="handleClick('land')" :prepend-icon="icons.land" title="土地利用" value="land"></v-list-item>
      <v-list-item @click="handleClick('elevation')" :prepend-icon="icons.elevation" title="地形高程"
                   value="elevation"></v-list-item>
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
