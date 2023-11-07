import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import mapboxgl from "mapbox-gl";


export const useConsequenceData = defineStore('consequenceData', () => {
    const map = ref()
    const releasePoints = ref([])
    const isMarkerClick = ref(false)
    const initMapInstance = (mapInstance: any) => {
        map.value = mapInstance
    }
    const initMaker = () => {
        map.value.getCanvas().style.cursor = 'crosshair';
        map.value.on('click', onMapClick);
        isMarkerClick.value = true
    }
    const closeInitMaker = () => {
        map.value.getCanvas().style.cursor = '';
        map.value.off('click', onMapClick)
        isMarkerClick.value = false
    }
    const onMapClick = function (e: any) {
        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([e.lngLat['lng'], e.lngLat['lat']])
            .addTo(map.value);

        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false
        })
            .setLngLat([e.lngLat['lng'], e.lngLat['lat']])
            .setHTML('' +
                '<input type="text" id="latInput" placeholder="Latitude"><br>' +
                '<input type="text" id="lngInput" placeholder="Longitude"><br>' +
                '<button id="updateMarker">Update Marker</button>')
            .addTo(map.value);

        marker.on('click', function (markerEvent: any) {
            markerEvent.stopPropagation();
            popup.addTo(map.value);
        });

        marker.on('dragstart', function () {
            map.value.getCanvas().style.cursor = 'pointer';
        });
        marker.on('dragend', function () {
            if (isMarkerClick.value) {
                map.value.getCanvas().style.cursor = 'crosshair';
            }
            if (!isMarkerClick.value) {
                map.value.getCanvas().style.cursor = '';
            }
        });
        marker.setPopup(popup);

        // const latInput = document.getElementById('latInput') as HTMLInputElement;
        // const lngInput = document.getElementById('lngInput') as HTMLInputElement;

        document.getElementById('updateMarker')?.addEventListener('click', updateMarker);

        const newLat = ref(123);
        const newLng = ref(25);

        function updateMarker() {
            console.log('updateMarker')
            const lat = newLat.value
            const lng = newLng.value

            // 在这里调用更新 marker 位置的方法
            updateMarkerPosition([lng, lat]);
            // 清空输入框
        }

// 在这里调用更新 marker 位置的方法，这里需要根据你的实际情况进行修改
        const updateMarkerPosition = (newPosition: any) => {
            marker.setLngLat([123, 24]);
        };
    }


    return {initMaker, initMapInstance, closeInitMaker}

    // const doseUrl = ref('')
    // const doseTiffUrl = ref('')
    //
    //
    //
    // const getDoseData = () => {
    //     axios.get(doseUrl.value).then((res) => {
    //
    //         console.log(res.data)
    //     })
    // }
    //
    // class calpuffDoseCustomLayer {
    //     private id: string;
    //     private type: string;
    //     private renderingMode: string;
    //     constructor(options: any) {
    //         this.id = 'calpuffDoseCustomLayer';
    //         this.type = 'custom';
    //         this.renderingMode = '2d';
    //     }
    //
    //     onAdd = (map: any, gl: any) => {
    //
    //     }
    //
    //     prerender = (gl: any, matrix: any) => {
    //
    //     }
    //
    //     render = (gl: any, matrix: any) => {
    //
    //     }
    //
    //     onRemove = (map: any, gl: any) => {
    //
    //     }

})

