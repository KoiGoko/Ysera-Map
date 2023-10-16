import {ref} from "vue";
import {defineStore} from "pinia";

export const useConsequenceData = defineStore('consequenceData', () => {
    const consequenceData = ref('http://')

    return {consequenceData}
})
