import {defineStore} from "pinia";

import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';

import ZoomControl from '@mapbox-controls/zoom';
import '@mapbox-controls/zoom/src/index.css';


export const useMapControl = defineStore('mapControl', () => {
    const rulerControl = new RulerControl();
    const zoomControl = new ZoomControl();


    const initRulerControl = (map: any) => {
        map.addControl(rulerControl, 'bottom-right')
    }

    const initZoomControl = (map: any) => {
        map.addControl(zoomControl, 'bottom-right')
    }


    const initBaseControl = (map: any) => {
        initZoomControl(map)
        initRulerControl(map)
    }

    return {initBaseControl}
})

