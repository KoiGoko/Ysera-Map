// Composables
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/view/main_content/MeteorologicalMap.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
    {
        path: '/stations',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
    {
        path: '/consequence',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
    {
        path: '/evacuate',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
    {
        path: '/nuclear',
        components: {
            map: () => import('@/view/main_content/NuclearMap.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
