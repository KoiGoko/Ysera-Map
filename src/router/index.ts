import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

// import LeftIndex from "@/components/main/sidebar/BarLeft.vue"
// import MapSPF from "@/components/main/core/evaluation/MapSPF.vue";
//routers
const routes: Array<RouteRecordRaw> = [
  {
    path: '/finance',
    name: 'finance',
    components: {
    }
  },
  {
    path: '/meteorology',
    name: 'meteorology',
    components: {
    }
  },
  {
    path: '/evaluation',
    name: 'nuclear',
    components: {
    }
  },
  {
    path: '/finance/gdp',
    name: 'gdp',
    components: {
    }
  },
  {
    path: '/finance/density',
    name: 'density',
    components: {
    }
  },
  {
    path: '/meteorology/weather',
    name: 'weather',
    components: {
    }
  },
  {
    path: '/meteorology/typhoon',
    name: 'typhoon',
    components: {
    }
  },
  {
    path: '/meteorology/inversion',
    name: 'inversion',
    components: {
    }
  },
  {
    path: '/evaluation/single',
    name: 'single',
    components: {
    }
  },
  {
    path: '/evaluation/multiple',
    name: 'multiple',
    components: {
    }
  },
  {
    path: '/evaluation/single',
    name: 'single',
    components: {
    }
  },
  {
    path: '/evacuate/success',
    name: 'success',
    components: {
    }
  },
  {
    path: '/evacuate/failure',
    name: 'failure',
    components: {
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
