// Composables
import {createRouter, createWebHistory} from 'vue-router'

import View from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        component: {
            default: View,
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
