import {ref} from "vue";
import {defineStore} from "pinia";


export const useInfoBar = defineStore('infoBar', () => {
    const infoBarStatus = ref(false)

    function closeInfoBar() {
        infoBarStatus.value = false
    }

    function openInfoBar() {
        infoBarStatus.value = true
    }

    return {infoBarStatus, closeInfoBar, openInfoBar}
})
