import {ref} from "vue";
import {defineStore} from "pinia";

export const useMeteorologicalStationsInfo = defineStore('meteorologicalStationsInfo', () => {
    const meteorologicalStationsData = ref('http://127.0.0.1:8001/me_stations_info');

    const initialCircleRadius = 4;
    const meteorologicalStationsColor = ref('#0D47A1');

    const initMeteorologicalStationsMap = (map: any) => {
        map.addSource('meteorologicalStations', {
            'type': 'geojson',
            'data': meteorologicalStationsData.value,
        });
        map.addLayer({
            'id': 'meteorologicalStations-point',
            'type': 'circle',
            'source': 'meteorologicalStations',
            'paint': {
                'circle-radius': initialCircleRadius,
                'circle-color': meteorologicalStationsColor.value,
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
            map.setPaintProperty('meteorologicalStations-point', 'circle-radius', radius);
        });
    }
    return {initMeteorologicalStationsMap}
})
