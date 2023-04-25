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
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";
import DrawMain from "@/components/main/drawer/DrawMain.vue";
const router = useRouter()

let icons = reactive({
  index: 'mdi-map-outline',
  land: 'mdi-tree-outline',
  elevation: 'mdi-landslide-outline'
})
let originIcons = reactive({
  index: 'mdi-map',
  land: 'mdi-tree',
  elevation: 'mdi-landslide'
})

function toggleIcon(button_name: string, button_icons: { index: string, land: string, elevation: string }) {
  icons.index = button_name === 'sub_index' ? originIcons.index : button_icons.index;
  icons.land = button_name === 'land' ? originIcons.land : button_icons.land;
  icons.elevation = button_name === 'elevation' ? originIcons.elevation : button_icons.elevation;
}

function indexPush() {
  router.push({
    name: 'sub_index'
  })
  toggleIcon('sub_index', { index: 'mdi-map', land: 'mdi-tree-outline', elevation: 'mdi-landslide-outline' })
}

function landPush() {
  router.push({
    name: 'land'
  })
  toggleIcon('land', { index: 'mdi-map-outline', land: 'mdi-tree', elevation: 'mdi-landslide-outline' })
}

function elevationPush() {
  router.push({
    name: 'elevation'
  })
  toggleIcon('elevation', { index: 'mdi-map-outline', land: 'mdi-tree-outline', elevation: 'mdi-landslide' })
}
</script>

<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
