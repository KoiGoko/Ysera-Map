import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

import LeftIndex from "@/components/main/drawer/LeftIndex.vue"
import LeftFinance from "@/components/main/drawer/LeftFinance.vue"
import LeftMeteorology from "@/components/main/drawer/LeftMeteorology.vue"
import LeftNuclear from "@/components/main/drawer/LeftNuclear.vue"
import LeftEvacuate from "@/components/main/drawer/LeftEvacuate.vue"
import MapIndex from "@/components/main/mapbox/index/MapIndex.vue"
import MapLand from "@/components/main/mapbox/index/MapLand.vue"
import MapElevation from "@/components/main/mapbox/index/MapElevation.vue"
import MapSPF from "@/components/main/mapbox/nuclear/MapSPF.vue";
import MapPopulation from "@/components/main/mapbox/finance/MapPopulation.vue";
import MapWorldMeteorology from "@/components/main/mapbox/meteorology/MapWorldMeteorology.vue";
import MapTyphoon from "@/components/main/mapbox/meteorology/MapTyphoon.vue";
import MapInversion from "@/components/main/mapbox/meteorology/MapInversion.vue";
import MapDose from "@/components/main/mapbox/nuclear/MapDose.vue";
import MapDiffusion from "@/components/main/mapbox/nuclear/MapDiffusion.vue";
//routers
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    components: {
      left_draw: LeftIndex,
      main_view: MapIndex
    }
  },
  {
    path: '/index',
    name: 'index',
    components: {
      left_draw: LeftIndex,
      main_view: MapIndex
    }
  },
  {
    path: '/finance',
    name: 'finance',
    components: {
      left_draw: LeftFinance,
      main_view: MapIndex
    }
  },
  {
    path: '/meteorology',
    name: 'meteorology',
    components: {
      left_draw: LeftMeteorology,
      main_view: MapIndex
    }
  },
  {
    path: '/nuclear',
    name: 'nuclear',
    components: {
      left_draw: LeftNuclear,
      main_view: MapIndex
    }
  },
  {
    path: '/evacuate',
    name: 'evacuate',
    components: {
      left_draw: LeftEvacuate,
      main_view: MapSPF
    }
  },
  {
    path: '/index/index',
    name: 'sub_index',
    components: {
      left_draw: LeftIndex,
      main_view: MapIndex
    }
  },
  {
    path: '/index/land',
    name: 'land',
    components: {
      left_draw: LeftIndex,
      main_view: MapLand
    }
  },
  {
    path: '/index/elevation',
    name: 'elevation',
    components: {
      left_draw: LeftIndex,
      main_view: MapElevation
    }
  },
  {
    path: '/finance/gdp',
    name: 'gdp',
    components: {
      left_draw: LeftFinance,
      main_view: MapIndex
    }
  },
  {
    path: '/finance/density',
    name: 'density',
    components: {
      left_draw: LeftFinance,
      main_view: MapPopulation
    }
  },
  {
    path: '/meteorology/weather',
    name: 'weather',
    components: {
      left_draw: LeftMeteorology,
      main_view: MapWorldMeteorology
    }
  },
  {
    path: '/meteorology/typhoon',
    name: 'typhoon',
    components: {
      left_draw: LeftMeteorology,
      main_view: MapTyphoon
    }
  },
  {
    path: '/meteorology/inversion',
    name: 'inversion',
    components: {
      left_draw: LeftMeteorology,
      main_view: MapInversion
    }
  },
  {
    path: '/nuclear/single',
    name: 'single',
    components: {
      left_draw: LeftNuclear,
      main_view: MapDose
    }
  },
  {
    path: '/nuclear/multiple',
    name: 'multiple',
    components: {
      left_draw: LeftNuclear,
      main_view: MapDose
    }
  },
  {
    path: '/nuclear/single',
    name: 'single',
    components: {
      left_draw: LeftNuclear,
      main_view: MapDose
    }
  },
  {
    path: '/evacuate/success',
    name: 'success',
    components: {
      left_draw: LeftEvacuate,
      main_view: MapLand
    }
  },
  {
    path: '/evacuate/failure',
    name: 'failure',
    components: {
      left_draw: LeftEvacuate,
      main_view: MapLand
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(), // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  routes
})

// const router = createRouter({
//   history: createWebHistory(), // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
//   routes
// })

export default router
