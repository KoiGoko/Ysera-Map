import {computed, ref} from "vue";
import {defineStore} from "pinia";
import {useMapStyle} from "@/store/mapStyle.ts";
import {useAccessToken} from "@/store/accessToken.ts";

export const useMapOption = defineStore('mapOption', () => {
    const accessToken = computed(() => useAccessToken().token)
    const mapStyle = computed(() => useMapStyle().mapStyle)
    const center = computed(() => [116, 39])
    const zoom = computed(() => 5)
    const projection = computed(() => "mercator")
    const options = ref({
        accessToken: accessToken,
        style: mapStyle,
        center: center,
        zoom: zoom,
        projection: projection,
    })

    return {options}
})
