import {defineStore} from 'pinia';
import {ref} from "vue";

export const useLayoutSize = defineStore('layoutSize', () => {

    // 左边标准抽屉宽度
    const leftNavMainWidth = ref(80)

    return {leftNavMainWidth}
})
