import {defineStore} from "pinia";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import DrawRectangle from "mapbox-gl-draw-rectangle-mode";


import {CircleMode, DragCircleMode} from 'mapbox-gl-draw-circle';


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
            draw_circle: CircleMode,
            drag_drag_circle: DragCircleMode,
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
        if (currDrawMode.value === 'draw_point') {
            map.value.getStyle().layers.forEach((layer: any) => {
                if (layer.id === 'meteorologicalStationsCircle') {
                    map.value.removeLayer(layer.id);
                    map.value.removeSource(layer.source);
                }
            })
        }
        currDrawMode.value = 'deleteAll'
    }

    function drawEvent(map: any) {
        const currZoomMeteorologicalStationInfos = computed(() => useMeteorologicalStationsInfo().currZoomMeteorologicalStationInfos)
        map.on('draw.update', async function (e: any) {
            const pointInsides = ref([])
            const coordinates = e.features[0].geometry.coordinates.slice();
            console.log(coordinates)

            if (currDrawMode.value === 'draw_rectangle' || currDrawMode.value === 'draw_polygon') {
                currZoomMeteorologicalStationInfos.value.filter((item: any) => {
                    const point = turf.point([item.longitude, item.latitude])
                    const polygon = turf.polygon(coordinates)
                    const pointInside = turf.booleanPointInPolygon(point, polygon)
                    if (pointInside) {
                        pointInsides.value.push(item)
                    }
                })
            }
            if (currDrawMode.value === 'draw_point') {
                map.getStyle().layers.forEach((layer: any) => {
                    if (layer.id === 'meteorologicalStationsCircle') {
                        map.removeLayer(layer.id);
                        map.removeSource(layer.source);
                    }
                })

                const center = [coordinates[0], coordinates[1]];
                const circle = turf.circle(center, circleRadius.value);
                currZoomMeteorologicalStationInfos.value.filter((item: any) => {
                    const point = turf.point([item.longitude, item.latitude])
                    const centerPoint = turf.point(center)
                    const pointInside = turf.distance(point, centerPoint, {units: 'kilometers'})
                    if (pointInside <= circleRadius.value) {
                        pointInsides.value.push(item)
                    }
                })
                map.addSource('meteorologicalStationsCircleSource', {
                    type: 'geojson',
                    data: circle,
                })
                map.addLayer({
                    id: 'meteorologicalStationsCircle',
                    type: 'fill',  // 将类型改为 'fill'
                    source: 'meteorologicalStationsCircleSource',
                    paint: {
                        'fill-color': '#f3bf1c',  // 使用 fill-color 定义填充颜色
                        'fill-opacity': 1,  // 使用 fill-opacity 定义填充颜色的透明度
                    },
                });
            }
            drawSelectStationData.value = pointInsides.value
        })


        map.on('draw.create', async function (e: any) {
            const drawMode = draw.getMode()
            const coordinates = e.features[0].geometry.coordinates.slice();
            console.log('矩形', coordinates)

            const pointInsides = ref([])
            if (drawMode === 'draw_point') {
                const center = [coordinates[0], coordinates[1]];
                const circle = turf.circle(center, circleRadius.value);
                currZoomMeteorologicalStationInfos.value.filter((item: any) => {
                    const point = turf.point([item.longitude, item.latitude])
                    const centerPoint = turf.point(center)
                    const pointInside = turf.distance(point, centerPoint, {units: 'kilometers'})
                    if (pointInside <= circleRadius.value) {
                        pointInsides.value.push(item)
                    }
                })
                if (currDrawMode.value === 'draw_point') {
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
                        if (currDrawMode.value === 'draw_point') {
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
                        }
                    });
                }
            }

            if (drawMode === 'draw_rectangle' || drawMode === 'draw_polygon') {
                currZoomMeteorologicalStationInfos.value.filter((item: any) => {
                    const point = turf.point([item.longitude, item.latitude])
                    const polygon = turf.polygon(coordinates)
                    const pointInside = turf.booleanPointInPolygon(point, polygon)
                    if (pointInside) {
                        pointInsides.value.push(item)
                    }
                })
            }
            drawSelectStationData.value = pointInsides.value
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
