import {ref} from "vue";
import {defineStore} from "pinia";

export const useMeteorologicalStationsInfo = defineStore('meteorologicalStationsInfo', () => {

    let initialCircleRadius = 4;
    const initMap = (mapRef: any) => {
        const map = mapRef.value.map
        map.addSource('stations', {
            'type': 'geojson',
            'data': 'http://127.0.0.1:8000/hello'
        });
        map.addLayer({
            'id': 'stations-maker',
            'type': 'circle',
            'source': 'stations',
            'paint': {
                'circle-radius': initialCircleRadius,
                'circle-color': '#223ab4'
            },
        });
        map.on('zoom', () => {
            const currentZoom = map.getZoom();
            const roundedZoom = Math.floor(currentZoom);
            let radius = 0
            if (roundedZoom < 5) {
                radius = 3
            } else if (roundedZoom < 7) {
                radius = 4
            } else if (roundedZoom < 9) {
                radius = 6
            } else if (roundedZoom < 11) {
                radius = 8
            } else {
                radius = 10
            }
            console.log(roundedZoom)
            map.setPaintProperty('stations-maker', 'circle-radius', radius);
        });
    }
    return {initMap}
})
