// Composables
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/view/main_content/Map.vue'),
            left: () => import('@/view/left_nav/index_left.vue'),
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
