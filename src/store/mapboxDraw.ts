import {defineStore} from "pinia";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import DrawRectangle from "mapbox-gl-draw-rectangle-mode";
import * as turf from '@turf/turf'
import {computed, ref} from "vue";
import {useMeteorologicalStationsInfo} from "@/store/meteorologicalStationsInfo.ts";


export const useMapboxDraw = defineStore('mapboxDraw', () => {
    const map = ref()
    const circleRadius = ref(80)
    const currDrawMode = ref()
    const drawSelectStationData = ref()
    const draw = new MapboxDraw({
        userProperties: true,
        displayControlsDefault: false, // 不显示默认绘制工具条
        modes: {
            ...MapboxDraw.modes,
            draw_rectangle: DrawRectangle,
        },
    });

    const getMapInstance = (mapInstance: any) => {
        map.value = mapInstance
    }

    const drawRectangle = () => {
        draw.changeMode('draw_rectangle');
        currDrawMode.value = draw.getMode()
    }

    const drawPolygon = () => {
        draw.changeMode('draw_polygon');
        currDrawMode.value = draw.getMode()
    }

    const drawPoint = () => {
        draw.changeMode('draw_point');
        currDrawMode.value = draw.getMode()
    }

    const deleteAll = () => {
        draw.deleteAll();
        console.log('删除', currDrawMode.value)
        if (currDrawMode.value === 'draw_point') {
            map.value.getStyle().layers.forEach((layer: any) => {
                if (layer.id === 'meteorologicalStationsCircle') {
                    map.value.removeLayer(layer.id);
                }
                // if (layer.id === 'meteorologicalStationsCircleSource') {
                //     map.value.removeSource(layer.id);
                // }
            })
        }
        if (currDrawMode.value === 'draw_rectangle') {
            console.log('draw_rectangle')
        }
        if (currDrawMode.value === 'draw_polygon') {
            console.log('draw_polygon')
        }
        currDrawMode.value = 'deleteAll'
    }

    function drawEvent(map: any) {
        map.on('draw.create', async function (e: any) {
            const drawMode = draw.getMode()
            const coordinates = e.features[0].geometry.coordinates.slice();
            const currZoomMeteorologicalStationInfos = computed(() => useMeteorologicalStationsInfo().currZoomMeteorologicalStationInfos)

            if (drawMode === 'draw_point') {
                const center = [coordinates[0], coordinates[1]];
                const circle = turf.circle(center, circleRadius.value);

                const pointInsides = ref([])
                currZoomMeteorologicalStationInfos.value.filter((item: any) => {
                    const point = turf.point([item.longitude, item.latitude])
                    const centerPoint = turf.point(center)
                    const pointInside = turf.distance(point, centerPoint, {units: 'kilometers'})
                    if (pointInside <= circleRadius.value) {
                        pointInsides.value.push(item)
                    }
                })
                console.log(pointInsides.value)

                drawSelectStationData.value = pointInsides.value

                console.log(drawSelectStationData.value)

                map.addSource('meteorologicalStationsCircleSource', {
                    type: 'geojson',
                    data: circle,
                })
                map.addLayer({
                    id: 'meteorologicalStationsCircle',
                    type: 'line',
                    source: 'meteorologicalStationsCircleSource',
                    paint: {
                        'line-color': '#f3bf1c',  // 使用 line-color 定义线的颜色
                        'line-opacity': 1,  // 使用 line-opacity 定义线的透明度
                        'line-width': 2,  // 使用 line-width 定义线的宽度
                    },
                });

                map.on('style.load', () => {
                    if (currDrawMode.value != 'deleteAll') {
                        map.addSource('meteorologicalStationsCircleSource', {
                            type: 'geojson',
                            data: circle,
                        })
                        map.addLayer({
                            id: 'meteorologicalStationsCircle',
                            type: 'line',
                            source: 'meteorologicalStationsCircleSource',
                            paint: {
                                'line-color': '#f1de0f',  // 使用 line-color 定义线的颜色
                                'line-opacity': 1,  // 使用 line-opacity 定义线的透明度
                                'line-width': 2,  // 使用 line-width 定义线的宽度
                            },
                        });
                    }
                })
            }

            if (drawMode === 'draw_rectangle') {
                console.log('draw_rectangle')
            }

            if (drawMode === 'draw_polygon') {
                console.log('draw_polygon')
            }
        });
    }

    return {
        draw,
        drawRectangle,
        drawPolygon,
        drawPoint,
        deleteAll,
        drawEvent,
        getMapInstance,
        currDrawMode,
        drawSelectStationData
    }
});
