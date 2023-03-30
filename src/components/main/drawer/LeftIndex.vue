<template>
  <v-card>
      <v-navigation-drawer
        expand-on-hover
        rail
        width="200"
        permanent
        color="primary"
      >
        <v-list-item
          nav
        >
          <template v-slot:append>

          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item @click="indexPush" class="rounded-end-pill" :prepend-icon="icons.index" title="全球核电" value="nuclear"></v-list-item>
          <v-list-item @click="landPush" class="rounded-end-pill" :prepend-icon="icons.land" title="土地利用" value="land"></v-list-item>
          <v-list-item @click="elevationPush" class="rounded-end-pill" :prepend-icon="icons.elevation" title="地形高程" value="elevation"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {useRouter, useRoute} from "vue-router";
const router = useRouter()
const icons = reactive({
  index: 'mdi-map-outline',
  land: 'mdi-tree-outline',
  elevation: 'mdi-landslide-outline'
})
const originIcons = reactive({
  index: 'mdi-map',
  land: 'mdi-tree',
  elevation: 'mdi-landslide'
})
function toggleIcon(button_name: string) {
  if (button_name === 'sub_index') {
    icons.index = originIcons.index
    icons.land = 'mdi-tree-outline'
    icons.elevation = 'mdi-landslide-outline'
  } else if (button_name === 'land') {
    icons.index = 'mdi-map-outline'
    icons.land = originIcons.land
    icons.elevation = 'mdi-landslide-outline'
  } else if (button_name === 'elevation') {
    icons.index = 'mdi-map-outline'
    icons.land = 'mdi-tree-outline'
    icons.elevation = originIcons.elevation
  }
}
function indexPush() {
  router.push({
    name: 'sub_index'
  })
  toggleIcon('sub_index')
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
