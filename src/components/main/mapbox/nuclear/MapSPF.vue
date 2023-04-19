<template>
  <!--SPF计算-->
  <div class="container">
    <v-map
      ref="mapRef"
      :accessToken="accessToken"
      :options="{
        center: [120, 30],
        zoom: 7,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'mercator'
      }"
    >
      <v-geo-source id="spf" :data="data"/>
      <v-fill-layer
        ref="fillLayerRef"
        id="spf"
        source="spf"
        :paint="{
          'fill-color': ['get', 'color'],
          'fill-opacity': bpm / 100,
        }"
      />
    </v-map>

    <v-card
    class="slide-opacity mx-auto"
    width="300"
    color="primary"
    height="74"
  >
    <v-card-text>
      <v-slider
        v-model="bpm"
        color="black"
        track-color="grey"
        min="0"
        max="100"
        :step="1"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-minus"
            color="black"
            @click="decrement"
          ></v-btn>
        </template>
        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-plus"
            color="black"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
    </v-card-text>
  </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {accessToken} from "@/utils/mapUtils"
import * as turf from "@turf/turf"
let bpm = ref(50)
let data = ref()

function increment() {
  bpm.value++
}
function decrement() {
  bpm.value--
}

const arrays = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  '#f44336', // red 500
  '#ff9800', // orange 500
  '#ffc107', // amber 500
  '#8bc34a', // lightgreen 500
  '#4caf50', // green 500
  '#2196f3', // blue 500
  '#3f51b5', // indigo 500
  '#9c27b0', // purple 500
];
let opacity = ref(0)
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
const radius = 30;
const center = [120, 30];
let prevCircle;
for (let i = 0; i < radius; i++) {
  let circle = turf.circle(center, i+1, {steps: 64, units: 'kilometers'})
  const value = arrays[i]
  for (let j = 0; j < 16; j++) {
    if (value[j] === 0) {
      continue;
    }
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
            color: get_color(value[j]),
            outline: 'transparent',
          },
          )
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
  data = turf.dissolve(fc, {propertyName: "color"})

}

</script>

<style scoped>
.slide-opacity {
  position: absolute;
  top: 10px;
  right: 10px;
}
@keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }
</style>
