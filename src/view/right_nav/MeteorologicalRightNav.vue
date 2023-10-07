<script setup lang="ts">
import {ref} from "vue";
import {useMapboxDraw} from "@/store/mapboxDraw.ts";
import {Icon} from "@iconify/vue";

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


</script>
<template>
  <div>
    <v-btn class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="364"
        height="100%"
        v-model="drawerRight"
    >
      <v-list>
        <v-list-subheader class="justify-start align-center">
          <v-btn
              icon
              @click.stop="drawerRight = !drawerRight"
              color="primary"
              variant="text"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-subheader>
        <v-divider class="mt-2 mx-2"></v-divider>
        <v-card class="ma-4" width="300" height="500" elevation="0">
          <v-card-item>
            <v-btn @click="drawRectangle" color="primary mt-1" variant="flat" class="rounded-pill">Rectangle</v-btn>
            <v-btn @click="drawPolygon" color="primary mt-1" variant="flat" class="rounded-pill">Polygon</v-btn>
            <v-btn @click="deleteAll" color="primary mt-1" variant="flat" class="rounded-pill">delete</v-btn>
            <v-btn @click="drawPoint, show = !show" color="primary mt-1" variant="flat" class="rounded-pill ">Point
            </v-btn>
          </v-card-item>

          <v-expand-transition>
            <div v-show="show">
              <v-radio-group>
                <v-card-item>
                  <v-radio class="text-h6" label="按照半径" value="1"></v-radio>
                </v-card-item>

                <v-card-item>
                  <v-radio class="text-h6" label="按照最近的台站" value="2"></v-radio>
                </v-card-item>
              </v-radio-group>
            </div>
          </v-expand-transition>
        </v-card>
        <v-divider class="mt-2 mx-2"></v-divider>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.right-nav-open {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
