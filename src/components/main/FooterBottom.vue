<template>
  <v-bottom-navigation
    elevation="0"
    height="74"
    bg-color="primary"
  >
    <v-spacer></v-spacer>
      <v-btn @click="addIndex" :prepend-icon="icons.index">核电分布</v-btn>
      <v-btn @click="addFinance" :prepend-icon="icons.finance">经济效应</v-btn>
      <v-btn @click="addMeteorology" :prepend-icon="icons.meteorology">气象反演</v-btn>
      <v-btn @click="addNuclear" :prepend-icon="icons.nuclear">事故模拟</v-btn>
      <v-btn @click="addEvacuate" :prepend-icon="icons.evacuate">撤离仿真</v-btn>
    <v-spacer></v-spacer>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import {useDrawerIcons} from "@/utils/useDrawerIcons"
const {icons, toggleIcon} = useDrawerIcons({
  icons: {
    index: 'mdi-map-outline',
    finance: 'mdi-file-document-edit-outline',
    meteorology: 'mdi-cloud-outline',
    nuclear: 'mdi-atom',
    evacuate: 'mdi-run'
  },
  activeIcons: {
    index: 'mdi-map',
    finance: 'mdi-file-document-edit',
    meteorology: 'mdi-cloud',
    nuclear: 'mdi-atom-variant',
    evacuate: 'mdi-run-fast'
  },
  temp: {
    index: 'mdi-map-outline',
    finance: 'mdi-file-document-edit-outline',
    meteorology: 'mdi-cloud-outline',
    nuclear: 'mdi-atom',
    evacuate: 'mdi-run'
  }
})
function addFinance() {
  router.push({
    name: 'finance'
  })
  toggleIcon('finance')
}
function addIndex() {
  router.push({
    name: 'index'
  })
  toggleIcon('index')
}
function addMeteorology() {
  router.push({
    name: 'meteorology'
  })
  toggleIcon('meteorology')
}
function addNuclear() {
  router.push({
    name: 'nuclear'
  })
  toggleIcon('nuclear')
}
function addEvacuate() {
  router.push({
    name: 'evacuate'
  })
  toggleIcon('evacuate')
}
</script>
<style scoped>

</style>
