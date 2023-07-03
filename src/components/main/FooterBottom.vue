<template>
<!--  <v-bottom-navigation-->
<!--    elevation="0"-->
<!--    height="65"-->
<!--    bg-color="primary"-->
<!--  >-->
<!--    <v-spacer></v-spacer>-->
<!--      <v-btn class="rounded-xl" @click="handleClick('index')" :prepend-icon="icons.index">核电分布</v-btn>-->
<!--      <v-btn class="rounded-xl" @click="handleClick('finance')" :prepend-icon="icons.finance">经济效应</v-btn>-->
<!--      <v-btn class="rounded-xl" @click="handleClick('meteorology')" :prepend-icon="icons.meteorology">气象反演</v-btn>-->
<!--      <v-btn class="rounded-xl" @click="handleClick('nuclear')" :prepend-icon="icons.nuclear">事故模拟</v-btn>-->
<!--      <v-btn class="rounded-xl" @click="handleClick('evacuate')" :prepend-icon="icons.evacuate">撤离仿真</v-btn>-->
<!--    <v-spacer></v-spacer>-->
<!--  </v-bottom-navigation>-->
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
const handleClick = (name: string) => {
  router.push({
    name: name
  })
  toggleIcon(name)
}
</script>
<style scoped>

</style>
