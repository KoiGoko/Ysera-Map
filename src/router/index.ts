import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

import LeftIndex from "@/components/main/sidebar/BarLeft.vue"
// import LeftFinance from "@/components/main/sidebar/left_drawer/LeftFinance.vue"
// import LeftMeteorology from "@/components/main/sidebar/left_drawer/LeftMeteorology.vue"
// import LeftNuclear from "@/components/main/sidebar/left_drawer/LeftNuclear.vue"
// import LeftEvacuate from "@/components/main/sidebar/left_drawer/LeftEvacuate.vue"
import MapIndex from "@/components/main/core/map/MapIndex.vue"
import MapLand from "@/components/main/core/map/MapLand.vue"
import MapElevation from "@/components/main/core/map/MapElevation.vue"
import MapSPF from "@/components/main/core/evaluation/MapSPF.vue";
import MapPopulation from "@/components/main/core/finance/MapPopulation.vue";
import MapWorldMeteorology from "@/components/main/core/meteorology/MapWorldMeteorology.vue";
import MapTyphoon from "@/components/main/core/meteorology/MapTyphoon.vue";
import MapInversion from "@/components/main/core/meteorology/MapInversion.vue";
import MapDose from "@/components/main/core/evaluation/MapDose.vue";
import MapDiffusion from "@/components/main/core/evaluation/MapDiffusion.vue";
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
    path: '/map',
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
      main_view: MapIndex
    }
  },
  {
    path: '/meteorology',
    name: 'meteorology',
    components: {
      main_view: MapIndex
    }
  },
  {
    path: '/evaluation',
    name: 'nuclear',
    components: {
      main_view: MapIndex
    }
  },
  {
    path: '/evacuate',
    name: 'evacuate',
    components: {
      main_view: MapSPF
    }
  },
  {
    path: '/map/map',
    name: 'sub_index',
    components: {
      left_draw: LeftIndex,
      main_view: MapIndex
    }
  },
  {
    path: '/map/land',
    name: 'land',
    components: {
      left_draw: LeftIndex,
      main_view: MapLand
    }
  },
  {
    path: '/map/elevation',
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
      main_view: MapIndex
    }
  },
  {
    path: '/finance/density',
    name: 'density',
    components: {
      main_view: MapPopulation
    }
  },
  {
    path: '/meteorology/weather',
    name: 'weather',
    components: {
      main_view: MapWorldMeteorology
    }
  },
  {
    path: '/meteorology/typhoon',
    name: 'typhoon',
    components: {
      main_view: MapTyphoon
    }
  },
  {
    path: '/meteorology/inversion',
    name: 'inversion',
    components: {
      main_view: MapInversion
    }
  },
  {
    path: '/evaluation/single',
    name: 'single',
    components: {
      main_view: MapDose
    }
  },
  {
    path: '/evaluation/multiple',
    name: 'multiple',
    components: {
      main_view: MapDose
    }
  },
  {
    path: '/evaluation/single',
    name: 'single',
    components: {
      main_view: MapDose
    }
  },
  {
    path: '/evacuate/success',
    name: 'success',
    components: {
      main_view: MapLand
    }
  },
  {
    path: '/evacuate/failure',
    name: 'failure',
    components: {
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
