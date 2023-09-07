// Composables
import {createRouter, createWebHistory} from 'vue-router'

import HomeRightNav from "@/components/home/HomeRightNav.vue";
import SwitchLayer from "@/components/bar/SwitchLayer.vue";

const routes = [
    {
        path: '/',
        components: {
            map: () => import('@/views/Home.vue'),
            left: () => import('@/components/bar/LeftNav.vue'),
            right: () => import('@/components/home/HomeRightNav.vue'),
            bottom: () => import('@/components/bar/SwitchLayer.vue'),
        }
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
