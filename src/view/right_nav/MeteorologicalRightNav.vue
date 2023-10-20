<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {useGlobalColor} from "@/store/globalColor.ts";
import {useInfoBar} from "@/store/infoBar.ts";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";
import InfoBar from "@/components/bar/InfoBar.vue";
import RightMenuIcon from "@/components/bar/RightMenuIcon.vue";

const drawerRight = ref(true)

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

const rightNavSubHeaderIconColor = computed(() => {
  return useGlobalColor().rightNavSubHeaderIconColor
})

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
onMounted(() => {
  const pageHeight = document.documentElement.scrollHeight;

  // 获取视口（浏览器窗口）的高度
  const viewportHeight = window.innerHeight;

  console.log('页面高度：', pageHeight);
  console.log('视口高度：', viewportHeight);
})
</script>
<template>
  <div>
    <v-btn color="background" class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
    >
      <RightMenuIcon></RightMenuIcon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="364"
        height="100%"
        v-model="drawerRight"
        color="background"
    >
      <v-list>
        <v-list-item class="d-flex justify-center">
          <v-btn
              icon="mdi-close"
              @click="openRightNav"
              variant="text"
          >
          </v-btn>
          <!--          <v-btn @click.stop="drawPoint" variant="flat" class=""-->
          <!--                 icon="mdi-vector-point"></v-btn>-->
          <!--          <v-btn @click="drawRectangle"  variant="flat" class=""-->
          <!--                 icon="mdi-rectangle-outline"></v-btn>-->
          <!--          <v-btn @click="drawPolygon"  variant="flat" class=""-->
          <!--                 icon="mdi-shape-polygon-plus"></v-btn>-->
          <!--          <v-btn @click="deleteAll"  variant="flat" height="48" width="96"-->
          <!--                 class="rounded-pill "-->
          <!--                 icon="mdi-trash-can-outline"></v-btn>-->
        </v-list-item>
      </v-list>
      <v-list
          density="compact"
          class="px-4">
        <!--                <v-expand-transition>-->
        <!--                  <div >-->
        <!--                    <v-radio-group>-->
        <!--                      <v-card-item>-->
        <!--                        <v-radio class="text-h6" label="按照半径" value="1"></v-radio>-->
        <!--                      </v-card-item>-->
        <!--                      <v-card-item>-->
        <!--                        <v-radio class="text-h6" label="按照最近的台站" value="2"></v-radio>-->
        <!--                      </v-card-item>-->
        <!--                    </v-radio-group>-->
        <!--                  </div>-->
        <!--                </v-expand-transition>-->
        <!--        <v-list-item-->
        <!--            color="primary"-->
        <!--            v-for="(info, index) in currZoomMeteorologicalStationInfos"-->
        <!--            :key="index"-->
        <!--            @click="openInfoBar"-->
        <!--            class="rounded"-->
        <!--            variant="plain"-->
        <!--            :value="index + 1"-->
        <!--        >-->
        <!--          {{ info['station_name'] }}-->
        <!--        </v-list-item>-->

        <v-list-item
            class="py-0 rounded-xl"
            density="compact"
            color="#00838F"
            base-color="#00838F"
            elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <template v-slot:append>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <v-spacer></v-spacer>
          <span>北京气象站</span>
        </v-list-item>

        <v-list-item
            density="compact"
            class="py-0 rounded-xl mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>

        <v-list-item class="mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>

        <v-list-item class="mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>

        <v-list-item class="mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>

        <v-list-item class="mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>

        <v-list-item class="mt-2" elevation="2" variant="flat" value="1">
          <template v-slot:prepend>
            <v-icon>mdi-vector-point</v-icon>
          </template>
          <span>按照半径</span>
        </v-list-item>
      </v-list>
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
