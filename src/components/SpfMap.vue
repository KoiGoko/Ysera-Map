<script setup>
import { reactive, ref, watch } from "vue";
import * as turf from "@turf/turf";
import api from "@/api";
import { useRegionStore } from "@/stores/home";
import { usePopuplationStore } from "@/stores/population";
import LayerPicker from "./LayerPicker.vue";

const accessToken =
  "pk.eyJ1IjoiY2hpbmVzZWphciIsImEiOiJjanU5bXFpZ28wN3JtNGRwZGM5MW84czVsIn0.DhHUA_m4clzrzHFGtj97kQ";
const mapRef = ref();
const popuStore = usePopuplationStore();
const regionStore = useRegionStore();
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
];
const times = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019,
];

const state = reactive({
  time: 2019,
  stations: [],
  data: turf.featureCollection([]),
  opacity: 1,
  legend: [],
});

const getColor = (min, max, value) => {
  const avg = (max - min) / 10;
  if (value <= min + avg) {
    return "#3034C5";
  } else if (value <= min + 2 * avg) {
    return "#3454FF";
  } else if (value <= min + 3 * avg) {
    return "#35AEFE";
  } else if (value <= min + 4 * avg) {
    return "#4CFFDF";
  } else if (value <= min + 5 * avg) {
    return "#69FF65";
  } else if (value <= min + 6 * avg) {
    return "#DFFF4D";
  } else if (value <= min + 7 * avg) {
    return "#FFBE35";
  } else if (value <= min + 8 * avg) {
    return "#FE6934";
  }
  return "#813332";
};

const fetchData = () => {
  if (state.stations.length === 0) return;
  api.stat
    .statPopuSPF({
      stations: state.stations,
      weight: true,
      year: state.time,
    })
    .then((res) => {
      const id = state.stations[0].id;
      const center = state.stations[0].lnglat;
      if (res.data[id]) {
        const {
          weightpopulation: population,
          radius,
          minvalue,
          maxvalue,
        } = res.data[id];
        const avg = (maxvalue - minvalue) / 10;
        const legend = [];
        for (let i = 0; i < 9; i++) {
          legend.push({ color: colors[i], value: (i * avg).toFixed(2) });
        }
        state.legend = legend.reverse();

        const fc = turf.featureCollection([]);
        let lastCircle;
        for (let i =  0; i < radius.length; i++) {
          const popu = population[i];
          const distance = radius[i];
          const circle = turf.circle(center, distance, {
            steps: 64,
          });
          for (let j = 0; j < popu.length; j++) {
            // if (popu[j] == 0) continue;
            if (i === 0) {
              fc.features.push(
                turf.polygon(
                  [
                    [
                      center,
                      ...circle.geometry.coordinates[0].slice(
                        4 * j,
                        4 * (j + 1) + 1
                      ),
                      center,
                    ],
                  ],
                  {
                    color: getColor(
                      minvalue,
                      maxvalue,
                      popu[popu.length - 1 - j]
                    ),
                  }
                )
              );
            } else {
              fc.features.push(
                turf.polygon(
                  [
                    [
                      ...lastCircle.geometry.coordinates[0].slice(
                        4 * j,
                        4 * (j + 1) + 1
                      ),
                      ...circle.geometry.coordinates[0]
                        .slice(4 * j, 4 * (j + 1) + 1)
                        .reverse(),
                      lastCircle.geometry.coordinates[0][4 * j],
                    ],
                  ],
                  {
                    color: getColor(
                      minvalue,
                      maxvalue,
                      popu[popu.length - 1 - j]
                    ),
                  }
                )
              );
            }
          }
          lastCircle = circle;
        }
        const dissolveData = turf.dissolve(fc, { propertyName: "color" });
        state.data = turf.transformRotate(dissolveData, -360 / 32, {
          pivot: center,
        });
        mapRef.value.map.fitBounds(turf.bbox(fc), {
          padding: 40,
        });
      }
    });
};

const handleMapLoaded = () => {
  console.log("loaded");
  mapRef.value.map.resize();
  const stations = [];
  for (const station of popuStore.station) {
    for (const region of regionStore.regions) {
      const locatedStation = region.stations.find((s) => s.id === station);
      if (locatedStation) {
        stations.push({
          id: station,
          lnglat: locatedStation.point.coordinates.slice(0, 2),
        });
        break;
      }
    }
    if (stations.length > 0) {
      break;
    }
  }
  state.stations = stations;
  fetchData();
};

watch(
  () => state.time,
  () => {
    state.length = [];
    fetchData();
  }
);

watch(
  () => state.opacity,
  () => {
    mapRef.value.map.setPaintProperty("spf", "fill-opacity", state.opacity);
  }
);
</script>

<template>
  <div class="header">
    <div class="title">厂址人口因子统计（SPF）</div>
    <el-space class="actions">
      <el-select style="width: 120px" v-model="state.time">
        <el-option
          v-for="time in times"
          :key="time"
          :label="`${time}年`"
          :value="time"
        />
      </el-select>
    </el-space>
  </div>
  <div class="chart">
    <v-map
      ref="mapRef"
      v-if="regionStore.mapLoaded"
      :accessToken="accessToken"
      :options="{
        style: regionStore.layer.style,
      }"
      @loaded="handleMapLoaded"
    >
      <v-geo-source id="spf" :data="state.data" />
      <v-fill-layer
        id="spf"
        source="spf"
        :paint="{
          'fill-color': ['get', 'color'],
        }"
      />
      <div class="slider">
        <el-slider
          :min="0"
          :max="1"
          :step="0.1"
          v-model="state.opacity"
          :format-tooltip="(v) => `${Math.floor(v * 100)}%`"
        />
      </div>
      <div class="legend">
        <div class="items" style="margin: 10px 0">
          <div
            class="item-color"
            v-for="legend in state.legend"
            :key="legend.color"
            :style="{
              backgroundColor: legend.color,
            }"
          ></div>
        </div>
        <div class="items">
          <div
            class="item-value"
            v-for="legend in state.legend"
            :key="legend.value"
          >
            {{ legend.value }}
          </div>
        </div>
      </div>
    </v-map>
    <LayerPicker />
  </div>
</template>

<style scoped>
.chart {
  height: calc(100vh - 60px - 96px - 96px);
  width: 100%;
  position: relative;
}
.header {
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .title {
  font-size: 1.3em;
}
.header .actions {
  display: flex;
  align-items: center;
}
.slider {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 12px;
  width: 200px;
}
.legend {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 12px;
  margin: 12px;
  background-color: white;
  display: flex;
}
.legend .items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.legend .item-color {
  height: 20px;
  width: 30px;
}
.legend .item-value {
  margin-left: 4px;
  color: #555;
}
</style>
