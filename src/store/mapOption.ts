import {computed, ref} from "vue";
import {defineStore} from "pinia";
import {useMapStyle} from "@/store/mapStyle.ts";
import {useAccessToken} from "@/store/accessToken.ts";

export const useMapOption = defineStore('mapOption', () => {
    const accessToken = computed(() => useAccessToken().token)
    const mapStyle = computed(() => useMapStyle().mapStyle)
    const options = ref({
        accessToken: accessToken,
        style: mapStyle,
        center: [116, 39],
        zoom: 6,
        projection: "mercator",
    })
    return {options}
})
