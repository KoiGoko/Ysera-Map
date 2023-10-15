<script setup lang="ts">
import {computed, ref} from "vue";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {useGlobalColor} from "@/store/globalColor.ts";
import {useInfoBar} from "@/store/infoBar.ts";
import InfoBar from "@/components/bar/InfoBar.vue";
import RightMenuIcon from "@/components/bar/RightMenuIcon.vue";

const drawerRight = ref(true)

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

const show = ref(false)

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
</script>
<template>
  <div>
    <v-btn elevation="1" color="primary" class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
    >
      <RightMenuIcon></RightMenuIcon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="364"
        height="100%"
        v-model="drawerRight"
        color="primary"
    >
      <v-list>
        <v-list-subheader elevation="4" class="justify-start align-center">
          <v-btn
              icon
              @click="openRightNav"
              color="primary"
              variant="flat"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn @click="drawPoint" :color="rightNavSubHeaderIconColor" variant="outlined" class="ml-4" icon="mdi-vector-point"></v-btn>
          <v-btn @click="drawRectangle" :color="rightNavSubHeaderIconColor" variant="outlined" class="ml-1"
                 icon="mdi-rectangle-outline"></v-btn>
          <v-btn @click="drawPolygon" :color="rightNavSubHeaderIconColor" variant="outlined" class="ml-1"
                 icon="mdi-shape-polygon-plus"></v-btn>

          <v-btn @click="deleteAll" :color="rightNavSubHeaderIconColor" variant="outlined" height="48" width="96" class="rounded-pill ml-4"
                 icon="mdi-trash-can-outline"></v-btn>
        </v-list-subheader>
        <v-divider class="mt-2 mx-2 mb-2"></v-divider>

        <v-list class="px-2">
          <v-list-item @click="openInfoBar" class="rounded" elevation="4" value="1">
          </v-list-item>
          <v-list-item class="rounded mt-1" height="48" elevation="4" value="2">

          </v-list-item>
          <v-list-item class="rounded mt-1" height="48" elevation="4" value="3">

          </v-list-item>
          <v-list-item class="rounded mt-1" height="48" elevation="4" value="4">

          </v-list-item>
          <v-list-item class="rounded mt-1" height="48" elevation="4" value="5">

          </v-list-item>
          <v-list-item class="rounded mt-1" height="48" elevation="4" value="6">

          </v-list-item>
        </v-list>

        <!--        <v-card class="ma-4" width="300" height="500" elevation="0">-->
        <!--          <v-card-item>-->
        <!--            <v-btn @click="drawRectangle" color="primary mt-1" variant="flat" class="rounded-pill">Rectangle</v-btn>-->
        <!--            <v-btn @click="drawPolygon" color="primary mt-1" variant="flat" class="rounded-pill">Polygon</v-btn>-->
        <!--            <v-btn @click="deleteAll" color="primary mt-1" variant="flat" class="rounded-pill">delete</v-btn>-->
        <!--            <v-btn @click="drawPoint, show = !show" color="primary mt-1" variant="flat" class="rounded-pill ">Point-->
        <!--            </v-btn>-->
        <!--          </v-card-item>-->

        <!--          <v-expand-transition>-->
        <!--            <div v-show="show">-->
        <!--              <v-radio-group>-->
        <!--                <v-card-item>-->
        <!--                  <v-radio class="text-h6" label="按照半径" value="1"></v-radio>-->
        <!--                </v-card-item>-->

        <!--                <v-card-item>-->
        <!--                  <v-radio class="text-h6" label="按照最近的台站" value="2"></v-radio>-->
        <!--                </v-card-item>-->
        <!--              </v-radio-group>-->
        <!--            </div>-->
        <!--          </v-expand-transition>-->
        <!--        </v-card>-->
        <!--        <v-divider class="mt-2 mx-2"></v-divider>-->
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
