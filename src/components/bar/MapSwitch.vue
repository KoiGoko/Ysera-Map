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
    <v-btn class="mb-3" icon
           @click="switchMap"
           color="red"
           variant="flat"
    >
      <v-icon>mdi-map</v-icon>
    </v-btn>
      <div v-show="showMapSwitch">
        <v-btn fab class="ml-2" variant="elevated" color="primary" @click.stop="switchLayer('outdoors'),
        showMapSwitch = !showMapSwitch" icon>
          <v-avatar
              size="48px"
              density="comfortable">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">
            </v-img>
          </v-avatar>
        </v-btn>

        <v-btn class="ml-1" variant="flat" @click.stop="switchLayer('satellite'),
        showMapSwitch = !showMapSwitch" icon>
          <v-avatar
              size="48px"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">
            </v-img>
          </v-avatar>
        </v-btn>
        <v-btn class="ml-1" variant="flat" color="primary" @click.stop="switchLayer('light'),
        showMapSwitch = !showMapSwitch" icon="mdi-home">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">
          </v-img>
        </v-btn>
        <v-btn class="ml-4" variant="flat" color="primary" @click.stop="switchLayer('satellite-streets'),
        showMapSwitch = !showMapSwitch" icon="mdi-home">
          <v-avatar
              density="comfortable"
              class="pa-0">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">
            </v-img>
          </v-avatar>
        </v-btn>
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
