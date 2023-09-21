// Composables
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/view/main_content/Map.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),

        },
    },
    {
        path: '/stations',
        components: {
            map: () => import('@/view/main_content/Map.vue'),
            left: () => import('@/components/nav/HomeLeftNav.vue'),
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
