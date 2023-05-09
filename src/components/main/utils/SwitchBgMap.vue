<template>
  <!--bg-map switch-->
  <v-menu location="start" class="switch-map">
    <template v-slot:activator="{ props }">
      <v-btn class="switch-map" elevation="4" icon="mdi-switch" color="primary" v-bind="props"/>
    </template>
    <v-row>
      <v-col>
        <v-btn @click="switchMap('mapbox')" icon="mdi-earth"/>
      </v-col>
      <v-col>
        <v-btn @click="switchMap('earth')" icon="mdi-mapbox"/>
      </v-col>
    </v-row>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const emit = defineEmits(['switch-map']);
const style = ref('map://styles/map/light-v11')
const mapbox = reactive({
  mapbox: 'map://styles/map/light-v11',
  earth: 'map://styles/map/satellite-streets-v11'
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
    top: 10px;
    right: 20px;
}
</style>
