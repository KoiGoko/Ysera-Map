import {ref} from "vue";
import {defineStore} from "pinia";
import mapboxgl from "mapbox-gl";

export const useNuclearStationsInfo = defineStore('nuclearStationsInfo', () => {
    const NuclearStationsData = ref('http://127.0.0.1:8002/nu_stations_info');
    const nuclearStation = ref(null)
    const initNuclearStationsMap = (map: any) => {
        map.addSource('NuclearStationsData', {
            type: 'geojson',
            data: NuclearStationsData.value,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
        });

        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'NuclearStationsData',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        });
        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'NuclearStationsData',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });
        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'NuclearStationsData',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 4,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });

        map.on('click', 'unclustered-point', (e: any) => {
            const {coordinates} = e.features[0].geometry

            nuclearStation.value = e.features[0].properties
            const nuclear_stations_name = e.features[0].properties['nuclear_stations_name'];
            const country = e.features[0].properties['country'];
            const reactor_type = e.features[0].properties['reactor_type'];
            const latitude = e.features[0].properties['latitude'];
            const longitude = e.features[0].properties['longitude'];

            const popupContent = `
            <div style="width: 120px">
                <h3>${nuclear_stations_name}核电站</h3>
                <p><b>国家</b>: ${country}</p>
                <p><b>经度</b>: ${longitude}</p>
                <p><b>纬度</b>: ${latitude}</p>
                <p><b>反应堆类型</b>: ${reactor_type}</p>
            </div>`;

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .setMaxWidth('300px')
                .addTo(map);
        })
    }
    return {initNuclearStationsMap, nuclearStation}
})
