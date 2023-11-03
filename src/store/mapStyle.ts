import {defineStore} from 'pinia';
import {ref} from "vue";

export const useMapStyle = defineStore('mapStyle', () => {

    const mapStyle = ref('mapbox://styles/mapbox/streets-v12')

    const mapStyleList = ref([
        {name: 'streets', value: 'mapbox://styles/mapbox/streets-v12'},
        {name: 'outdoors', value: 'mapbox://styles/mapbox/outdoors-v12'},
        {name: 'light', value: 'mapbox://styles/mapbox/light-v11'},
        {name: 'dark', value: 'mapbox://styles/mapbox/dark-v11'},
        {name: 'satellite', value: 'mapbox://styles/mapbox/satellite-v9'},
        {name: 'satellite-streets', value: 'mapbox://styles/mapbox/satellite-streets-v12'},
        {name: 'navigation-day', value: 'mapbox://styles/mapbox/navigation-day-v1'},
        {name: 'navigation-night', value: 'mapbox://styles/mapbox/navigation-night-v1'},
    ])

    const setMapStyle = (styleName: string) => {
        const selectedStyle = mapStyleList.value.find(style => style.name === styleName);
        if (selectedStyle) {
            mapStyle.value = selectedStyle.value;
        } else {
            console.warn(`Map style '${styleName}' not found.`);
        }
    }
    return {setMapStyle, mapStyle}
})
