<template>
  <!--bg-core switch-->
  <v-menu location="start" class="switch-map">
    <template v-slot:activator="{ props }">
      <v-btn width="36" height="36" class="switch-map" elevation="4" icon="mdi-switch" color="primary" v-bind="props"/>
    </template>
    <v-row>
      <v-col>
        <v-btn width="36" height="36" @click="switchMap('mapbox')" icon="mdi-earth"/>
      </v-col>
      <v-col>
        <v-btn width="36" height="36" @click="switchMap('earth')" icon="mdi-mapbox"/>
      </v-col>
    </v-row>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const emit = defineEmits(['switch-core']);
const style = ref('core://styles/core/light-v11')
const mapbox = reactive({
  mapbox: 'core://styles/core/light-v11',
  earth: 'core://styles/core/satellite-streets-v11'
})
function switchMap(SwitchMap:string) {
  if (SwitchMap === 'mapbox') {
    style.value = mapbox.mapbox
  } else if (SwitchMap === 'earth') {
    style.value = mapbox.earth
  }
  emit('switch-core', style.value)
}
</script>

<style scoped>
.switch-map {
    position: absolute;
    top: 10px;
    right: 20px;
}
</style>
