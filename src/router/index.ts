// Composables
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/view/map_content/NuclearMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            top: () => import('@/view/top/EvacuateTop.vue'),

        },
    },
    {
        path: '/meteorological',
        components: {
            map: () => import('@/view/map_content/MeteorologicalMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/MeteorologicalRightNav.vue'),
            bottom: () => import('@/view/bottom_bar/EvacuateBottomBar.vue'),
            top: () => import('@/view/top/EvacuateTop.vue'),
        },
    },
    {
        path: '/consequence',
        components: {
            map: () => import('@/view/map_content/ConsequenceMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/ConsequenceRightNav.vue'),
            bottom: () => import('@/view/bottom_bar/EvacuateBottomBar.vue'),
            top: () => import('@/view/top/EvacuateTop.vue'),
        },
    },
    {
        path: '/evacuate',
        components: {
            map: () => import('@/view/map_content/EvacuateMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/EvacuateRightNav.vue'),
            bottom: () => import('@/view/bottom_bar/EvacuateBottomBar.vue'),
            top: () => import('@/view/top/EvacuateTop.vue'),
        },
    },
    {
        path: '/nuclear',
        components: {
            map: () => import('@/view/map_content/NuclearMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/NuclearRightNav.vue'),
            bottom: () => import('@/view/bottom_bar/EvacuateBottomBar.vue'),
            top: () => import('@/view/top/EvacuateTop.vue'),
        },
    },
    {
        path: '/login',
        components: {
            main: () => import('@/components/login/LoginIndex.vue'),
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
