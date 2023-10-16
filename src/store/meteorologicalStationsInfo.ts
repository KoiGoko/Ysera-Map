import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import mapboxgl from "mapbox-gl";

interface MeteorologicalStationProperties {
    barometric_sensor_altitude_meters: number;
    id: number;
    latitude: number;
    longitude: number;
    observed_sea_level_height: string; // You might want to use a more specific type here
    province: string;
    station_id: number;
    station_name: string;
    station_note: string | null;
    station_type: string;
}

export const useMeteorologicalStationsInfo = defineStore('meteorologicalStationsInfo', () => {
    const meteorologicalStationsData = ref('http://127.0.0.1:8001/me_stations_info');

    const initialCircleRadius= 4;
    const meteorologicalStationsColor = ref('#0D47A1');
    const meteorologicalJson = ref<MeteorologicalStationProperties[]>([]);
    const meteorologicalStation = ref(null)




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

        map.on('click', 'meteorologicalStations-point', (e: any) => {
            const {coordinates} = e.features[0].geometry

            meteorologicalStation.value = e.features[0].properties
            const formattedCoordinates = {
                longitude: coordinates[0].toFixed(6),
                latitude: coordinates[1].toFixed(6),
            };
            const description = e.features[0].properties['station_name'];
            // 站点级别
            const station_type = e.features[0].properties['station_type'];

            const popupContent = `
            <div style="width: 120px">
                <h3>${description}气象站     </h3>
                <p><b>经度</b>: ${formattedCoordinates.longitude}</p>
                <p><b>纬度</b>: ${formattedCoordinates.latitude}</p>
                <p><b>站点级别</b>: ${station_type}</p>
            </div>`;

            console.log(coordinates)
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .setMaxWidth('300px')
                .addTo(map);
        })
    }

    const getMeteorologicalStationsData = () => {
        axios.get(meteorologicalStationsData.value).then((response: any) => {
            meteorologicalJson.value = [];
            for (let i = 0; i < response.data.features.length; i++) {
                const feature = response.data.features[i].properties;
                meteorologicalJson.value.push(feature)
            }
        }).catch((error: any) => {
            console.log(error)
        })
        return meteorologicalJson.value
    }
    return {initMeteorologicalStationsMap, getMeteorologicalStationsData, meteorologicalStation}
})
