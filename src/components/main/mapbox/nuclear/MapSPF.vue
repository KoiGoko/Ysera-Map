<template>
  <div class="container">
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="{
        center: [120, 30],
        zoom: 10,
        style: 'mapbox://styles/mapbox/satellite-v9',
        projection: 'mercator'
      }"
    >
      <v-geo-source id="spf" :data="fc"/>
      <v-fill-layer
        id="spf"
        source="spf"
        :paint="{
          'fill-color': ['get', 'color'],
        }"
      />
    </v-map>


  </div>


</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {accessToken} from "@/utils/mapUtils"
import * as turf from "@turf/turf"
const arrays = [
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [4, 0, 2, 4, 8, 5, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 0, 2, 4, 8, 6, 5, 6, 5, 8, 1, 3, 2, 4, 4, 6],
  [5, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [6, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 1, 5, 9, 2, 3, 2, 4, 3, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 8, 2, 5, 9, 1, 3, 2, 4, 4, 6],
  [5, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 8, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 4, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 2, 2, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 5, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 3, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 6, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 5],
  [1, 2, 2, 4, 1, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 2, 4, 8, 3, 4, 6, 5, 9, 2, 3, 2, 4, 4, 6],
  [8, 0, 2, 4, 8, 6, 4, 6, 7, 9, 1, 3, 2, 4, 4, 6],
  [1, 2, 6, 4, 8, 6, 4, 6, 3, 9, 1, 3, 2, 4, 4, 6],
  [1, 6, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 5, 4, 6],
  [1, 8, 2, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 7],
  [1, 0, 2, 4, 8, 6, 4, 6, 3, 9, 1, 3, 2, 4, 4, 6],
  [1, 0, 5, 4, 8, 6, 4, 6, 5, 9, 1, 3, 2, 4, 4, 6],
]

const colors = [
  "#3034C5",
  "#3454FF",
  "#35AEFE",
  "#4CFFDF",
  "#69FF65",
  "#DFFF4D",
  "#FFBE35",
  "#FE6934",
  "#813332",
  "#100101",
];

function draw_color(min, max, value) {
  const index = Math.floor((value - min) / (max - min) * 9);
  return colors[index];
}
function get_color(value) {
  if (value === 0) {
    return 'black';
  }
  return colors[value]
}

const fc = turf.featureCollection([]);
let data = turf.circle([120, 30], 10, {steps: 100, units: 'kilometers'})
const radius = 30;
const center = [120, 30];
let prevCircle;
let sum = 0
for (let i = 0; i < radius; i++) {
  let circle = turf.circle(center, i+1, {steps: 64, units: 'kilometers'})
  const value = arrays[i]
  for (let j = 0; j < 16; j++) {
    // if (value[j] === 0) {
    //   continue;
    // }
      if (i === 0) {
        fc.features.push(
          turf.polygon([
            [
              center,
              ...circle.geometry.coordinates[0].slice(
                4 * j,
                4 * (j + 1) + 1
              ),
              center,
            ],
          ], {
            color: get_color(value[j])
          })
        )
      } else {
        prevCircle = turf.circle(center, i, {steps: 64, units: 'kilometers'});
        fc.features.push(
          turf.polygon(
            [
              [
                ...prevCircle.geometry.coordinates[0].slice(
                  4 * j,
                  4 * (j + 1) + 1
                ),
                ...circle.geometry.coordinates[0]
                  .slice(4 * j, 4 * (j + 1) + 1)
                  .reverse(),
                prevCircle.geometry.coordinates[0][4 * j],
              ],
            ],
            {
              color: get_color(value[j]),
            }
          )

        );

      }
    }
}

  // }
// }
</script>

<style scoped>

</style>
