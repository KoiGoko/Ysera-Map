import {ref} from "vue";
import {defineStore} from "pinia";

export const useLeftNavList = defineStore('leftNavList', () => {
    const nuclearItems = ref([
        {text: '全球核电', icon: 'mdi-database', to: '/nuclear'},
        {text: '后果评价', icon: 'mdi-calculator', to: '/consequence'},
    ]);

    const atmosphereItems = ref([
        {text: '气象台站', icon: 'mdi-radar', to: '/meteorological'},
    ]);

    const evacuateItems = ref([
        {text: '撤离模拟', icon: 'mdi-run-fast', to: '/evacuate'},
    ]);

    return {atmosphereItems, nuclearItems, evacuateItems}
})
