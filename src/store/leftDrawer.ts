import {ref} from "vue";
import {defineStore} from "pinia";

export const useLeftDrawer = defineStore('leftDrawer', () => {
    const drawer = ref(false);
    function toggleDrawer() {
        drawer.value = !drawer.value;
    }
    return {drawer, toggleDrawer}
})
