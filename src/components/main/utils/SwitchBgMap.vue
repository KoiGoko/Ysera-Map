<template>
  <!--底图切换组件-->
  <v-menu class="switch-map">
    <template v-slot:activator="{ props  }">
      <v-btn class="switch-map" elevation="4" icon="mdi-switch" color="primary" v-bind="props"></v-btn>
    </template>
    <v-btn @click="switchMap('mapbox')" icon="mdi-earth"></v-btn>
    <v-btn @click="switchMap('earth')" icon="mdi-mapbox"></v-btn>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const emit = defineEmits(['switch-map']);
const style = ref('mapbox://styles/mapbox/light-v11')
const mapbox = reactive({
  mapbox: 'mapbox://styles/mapbox/light-v11',
  earth: 'mapbox://styles/mapbox/satellite-streets-v11'
})
function switchMap(SwitchMap:string) {
  if (SwitchMap === 'mapbox') {
    style.value = mapbox.mapbox
  } else if (SwitchMap === 'earth') {
    style.value = mapbox.earth
  }
  emit('switch-map', style.value)
}
</script>

<style scoped>
.switch-map {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>
