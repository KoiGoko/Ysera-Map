<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {useInfoBar} from "@/store/infoBar.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import InfoBar from "@/components/bar/InfoBar.vue";
import RightMenuIcon from "@/components/bar/RightMenuIcon.vue";

const drawerRight = ref(true)

function drawSwitch() {
  drawerRight.value = !drawerRight.value
}

const currZoomMeteorologicalStationInfos = computed(() => useMeteorologicalStationsInfo().currZoomMeteorologicalStationInfos)

const drawRectangle = () => {
  useMapboxDraw().drawRectangle()
}

const deleteAll = () => {
  useMapboxDraw().deleteAll()
}

const drawPoint = () => {
  useMapboxDraw().drawPoint()
}

const drawPolygon = () => {
  useMapboxDraw().drawPolygon()
}


const openInfoBar = () => {
  useInfoBar().openInfoBar()
}

const closeInfoBar = () => {
  useInfoBar().closeInfoBar()
}
const openRightNav = () => {
  drawerRight.value = !drawerRight.value
  closeInfoBar()
}
</script>
<template>
  <div>
    <v-btn color="background" class="right-nav-open" @click="drawSwitch"
           icon
    >
      <RightMenuIcon></RightMenuIcon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="364"
        v-model="drawerRight"
        color="background"
    >
      <v-list height="90" class="px-4">

      </v-list>
      <v-list
          density="compact"
          class="px-4">
        <!--        <v-list-item-->
        <!--            v-for="(info, index) in currZoomMeteorologicalStationInfos"-->
        <!--            :key="index"-->
        <!--            @click="openInfoBar"-->
        <!--            class="py-0 rounded-xl mt-2"-->
        <!--            elevation="0" variant="flat"-->
        <!--            :value="index + 1"-->
        <!--            density="compact"-->
        <!--            color="#00838F"-->
        <!--            base-color="#00838F"-->
        <!--        >-->
        <!--          <template v-slot:append>-->
        <!--            <v-icon>mdi-vector-point</v-icon>-->
        <!--          </template>-->
        <!--          <span>{{ info['station_name'] }}气象站-->
        <!--          </span>-->
        <!--          <span><br></span>-->
        <!--          <span>-->
        <!--                  {{ info['station_type'] }}-->
        <!--          </span>-->
        <!--        </v-list-item>-->
      </v-list>

      <v-card style="position: absolute; top: 0px; right: 16px"
              width="347"
              elevation="4"
              translate="yes"
              color="background"
              class="d-flex justify-center align-center rounded-0 pr-4"
              height="90">
        <v-btn
            icon
            @click="drawSwitch"
            variant="text"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-btn @click.stop="drawPoint"
               variant="flat"
               color="secondary"
               icon="mdi-vector-point"
               class="ml-1"
        >
        </v-btn>

        <v-btn @click="drawRectangle"
               variant="flat"
               color="secondary"
               icon="mdi-rectangle-outline"
               class="ml-1"
        >
        </v-btn>
        <v-btn @click="drawPolygon"
               variant="flat"
               color="secondary"
               icon="mdi-shape-polygon-plus"
               class="ml-1"
        >
        </v-btn>
        <v-btn @click="deleteAll"
               variant="flat"
               color="secondary"
               height="48" width="96"
               class="rounded-pill ml-1"
               icon="mdi-trash-can-outline"
        >
        </v-btn>
      </v-card>
    </v-navigation-drawer>
    <InfoBar></InfoBar>
  </div>
</template>

<style scoped>
.right-nav-open {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
