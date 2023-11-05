import {ref} from "vue";
import {defineStore} from "pinia";

export const useLeftDrawer = defineStore('leftDrawer', () => {
    const drawer = ref(true);
    const toggleDrawer = () => {
        drawer.value = !drawer.value;
    }
    return {drawer, toggleDrawer}
})
