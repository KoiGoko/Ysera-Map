<script setup lang="ts">
import {computed, ref} from "vue"
import {useMapStyle} from "@/store/mapStyle";
import {useStyleAvatar} from "@/store/styleAvatar.ts";

const switchLayer = (name: string) => {
  useMapStyle().getMapStyle(name);
};
const styleItems = computed(() => useStyleAvatar().styleItems)
const showMapSwitch = ref(false)

function switchMap() {
  showMapSwitch.value = !showMapSwitch.value
}
</script>
<template>
  <v-row class="switch-menu mx-0 my-0">
    <v-btn class="mb-3 mr-2" icon
           @click="switchMap"
           color="primary"
           elevation="1"
    >
      <v-icon>mdi-map</v-icon>
    </v-btn>
    <div v-show="showMapSwitch">
      <v-btn variant="flat" color="primary" @click.stop="switchLayer('outdoors'),
        showMapSwitch = !showMapSwitch" icon="mdi-home"></v-btn>
      <v-btn variant="flat" color="primary" @click.stop="switchLayer('satellite'),
        showMapSwitch = !showMapSwitch" icon="mdi-home"></v-btn>
      <v-btn variant="flat" color="primary" @click.stop="switchLayer('light'),
        showMapSwitch = !showMapSwitch" icon="mdi-home"></v-btn>
      <v-btn variant="flat" color="primary" @click.stop="switchLayer('satellite-streets'),
        showMapSwitch = !showMapSwitch" icon="mdi-home"></v-btn>
    </div>
  </v-row>
</template>

<style scoped>
.switch-menu {
  position: absolute;
  bottom: 8px;
  left: 88px;
}
</style>
