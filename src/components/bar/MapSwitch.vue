<script setup lang="ts">
import {ref} from "vue"
import {useMapStyle} from "@/store/mapStyle";

const switchLayer = (name: string) => {
  useMapStyle().getMapStyle(name);
};
const showMapSwitch = ref(false)

function switchMap() {
  showMapSwitch.value = !showMapSwitch.value
}
</script>
<template>
  <v-row class="switch-menu mx-0 my-0">
    <v-btn class="mb-3" icon
           @click="switchMap"
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
          <v-img src="https://s2.loli.net/2023/10/23/rPVEFYdeInk8TjD.png">
          </v-img>
        </v-avatar>
      </v-btn>

      <v-btn class="ml-1" variant="elevated" @click.stop="switchLayer('dark'),
        showMapSwitch = !showMapSwitch" icon>
        <v-avatar
          size="48px"
        >
          <v-img src="https://s2.loli.net/2023/10/23/76oYtpOQwIiU1Pm.png">
          </v-img>
        </v-avatar>
      </v-btn>
      <v-btn class="ml-1" variant="elevated" color="primary" @click.stop="switchLayer('light'),
        showMapSwitch = !showMapSwitch" icon="mdi-home">

        <v-avatar
          size="48px"
        >
          <v-img src="https://s2.loli.net/2023/10/23/a3UpThNj8C5E7dl.png">
          </v-img>
        </v-avatar>
      </v-btn>
      <v-btn class="ml-1" variant="elevated" color="primary" @click.stop="switchLayer('satellite-streets'),
        showMapSwitch = !showMapSwitch" icon="mdi-home">
        <v-avatar
          size="48px"
        >
          <v-img src="https://s2.loli.net/2023/10/23/GzLf3NSVC6EUKaX.png">
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
