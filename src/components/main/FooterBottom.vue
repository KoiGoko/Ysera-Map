<template>
  <v-bottom-navigation
    elevation="0"
    height="74"
    bg-color="primary"
  >
    <v-spacer></v-spacer>
      <v-btn class="rounded-lg" @click="addIndex" :prepend-icon="icons.index">核电分布</v-btn>
      <v-btn class="rounded-lg" @click="addFinance" :prepend-icon="icons.finance">经济效应</v-btn>
      <v-btn class="rounded-lg" @click="addMeteorology" :prepend-icon="icons.meteorology">气象反演</v-btn>
      <v-btn class="rounded-lg" @click="addNuclear" :prepend-icon="icons.nuclear">事故模拟</v-btn>
      <v-btn class="rounded-lg" @click="addEvacuate" :prepend-icon="icons.evacuate">撤离仿真</v-btn>
    <v-spacer></v-spacer>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import {reactive} from "vue"
import { useRouter } from 'vue-router'
const icons = reactive({
  index: 'mdi-map-outline',
  finance: 'mdi-file-document-edit-outline',
  meteorology: 'mdi-cloud-outline',
  nuclear: 'mdi-atom',
  evacuate: 'mdi-run'
})
const originIcons = reactive({
  index: 'mdi-map',
  finance: 'mdi-file-document-edit',
  meteorology: 'mdi-cloud',
  nuclear: 'mdi-atom-variant',
  evacuate: 'mdi-run-fast'
})

function toggleIcon(button_name:string) {
  if (button_name === 'index') {
    icons.index = originIcons.index
    icons.finance = 'mdi-file-document-edit-outline'
    icons.meteorology = 'mdi-cloud-outline'
    icons.nuclear = 'mdi-atom'
    icons.evacuate = 'mdi-run'
  } else if (button_name === 'finance') {
    icons.index = 'mdi-map-outline'
    icons.finance = originIcons.finance
    icons.meteorology = 'mdi-cloud-outline'
    icons.nuclear = 'mdi-atom'
    icons.evacuate = 'mdi-run'
  } else if (button_name === 'meteorology') {
    icons.index = 'mdi-map-outline'
    icons.finance = 'mdi-file-document-edit-outline'
    icons.meteorology = originIcons.meteorology
    icons.nuclear = 'mdi-atom'
    icons.evacuate = 'mdi-run'
  } else if (button_name === 'nuclear') {
    icons.index = 'mdi-map-outline'
    icons.finance = 'mdi-file-document-edit-outline'
    icons.meteorology = 'mdi-cloud-outline'
    icons.nuclear = originIcons.nuclear
    icons.evacuate = 'mdi-run'
  } else if (button_name === 'evacuate') {
    icons.index = 'mdi-map-outline'
    icons.finance = 'mdi-file-document-edit-outline'
    icons.meteorology = 'mdi-cloud-outline'
    icons.nuclear = 'mdi-atom'
    icons.evacuate = originIcons.evacuate
  }
}

const router = useRouter()
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
