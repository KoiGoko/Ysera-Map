// Composables
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            top: () => import('@/view/top/HomeTop.vue'),

        },
    },
    {
        path: '/meteorological',
        components: {
            map: () => import('@/view/main_content/MeteorologicalMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/MeteorologicalRightNav.vue'),
        },
    },
    {
        path: '/consequence',
        components: {
            map: () => import('@/view/main_content/ConsequenceMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/ConsequenceRightNav.vue'),
        },
    },
    {
        path: '/evacuate',
        components: {
            map: () => import('@/view/main_content/EvacuateMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/EvacuateRightNav.vue'),
        },
    },
    {
        path: '/nuclear',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/view/left_nav/HomeLeftNav.vue'),
            right: () => import('@/view/right_nav/NuclearRightNav.vue'),
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
