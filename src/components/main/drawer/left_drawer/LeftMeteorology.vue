<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="weatherPush" class="rounded-end-pill" :prepend-icon="icons.weather" title="全球气象" value="weather"></v-list-item>
      <v-list-item @click="typhoonPush" class="rounded-end-pill" :prepend-icon="icons.typhoon" title="台风情况" value="typhoon"></v-list-item>
      <v-list-item @click="inversionPush" class="rounded-end-pill" :prepend-icon="icons.inversion" title="气象反演" value="inversion"></v-list-item>
    </v-list>
  </DrawMain>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from "vue-router";
import DrawMain from "@/components/main/drawer/DrawMain.vue";
const router = useRouter()
const icons = reactive({
  weather: 'mdi-cloud-percent-outline',
  typhoon: 'mdi-lightning-bolt-outline',
  inversion: 'mdi-chart-areaspline',
})
const originIcons = reactive({
  weather: 'mdi-cloud-percent',
  typhoon: 'mdi-lightning-bolt',
  inversion: 'mdi-chart-areaspline-variant',
})
function toggleIcon(button_name: string) {
  if (button_name === 'weather') {
    icons.weather = originIcons.weather
    icons.typhoon = 'mdi-lightning-bolt-outline'
    icons.inversion = 'mdi-chart-areaspline'
  } else if (button_name === 'typhoon') {
    icons.weather = 'mdi-cloud-percent-outline'
    icons.typhoon = originIcons.typhoon
    icons.inversion = 'mdi-chart-areaspline'
  } else if (button_name === 'inversion') {
    icons.weather = 'mdi-cloud-percent-outline'
    icons.typhoon = 'mdi-lightning-bolt-outline'
    icons.inversion = originIcons.inversion
  }
}
function weatherPush() {
  router.push({
    name: 'weather'
  })
  toggleIcon('weather')
}
function typhoonPush() {
  router.push({
    name: 'typhoon'
  })
  toggleIcon('typhoon')
}
function inversionPush() {
  router.push({
    name: 'inversion'
  })
  toggleIcon('inversion')
}
</script>

<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
