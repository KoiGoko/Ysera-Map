<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="indexPush" class="rounded-end-pill" :prepend-icon="icons.index" title="全球核电" value="nuclear"></v-list-item>
      <v-list-item @click="landPush" class="rounded-end-pill" :prepend-icon="icons.land" title="土地利用" value="land"></v-list-item>
      <v-list-item @click="elevationPush" class="rounded-end-pill" :prepend-icon="icons.elevation" title="地形高程" value="elevation"></v-list-item>
    </v-list>
  </DrawMain>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
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
function indexPush() {
  router.push({
    name: 'sub_index'
  })
  toggleIcon('index')
}

function landPush() {
  router.push({
    name: 'land'
  })
  toggleIcon('land')
}

function elevationPush() {
  router.push({
    name: 'elevation'
  })
  toggleIcon('elevation')
}
</script>

<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
