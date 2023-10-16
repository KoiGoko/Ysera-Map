import {defineStore} from "pinia";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import DrawRectangle from "mapbox-gl-draw-rectangle-mode";


export const useMapboxDraw = defineStore('mapboxDraw', () => {
    const draw = new MapboxDraw({
        userProperties: true,
        displayControlsDefault: false, // 不显示默认绘制工具条
        modes: {
            ...MapboxDraw.modes,
            draw_rectangle: DrawRectangle,
        },
    });
    function drawRectangle() {
        draw.changeMode('draw_rectangle');
    }

    function drawPolygon() {
        draw.changeMode('draw_polygon');
    }

    function drawPoint() {
        draw.changeMode('draw_point');
    }
    function deleteAll() {
        draw.deleteAll()
    }
    return {draw, drawRectangle, drawPolygon, drawPoint, deleteAll}
});
