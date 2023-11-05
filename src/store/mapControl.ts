import {defineStore} from "pinia";

import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';

import ZoomControl from '@mapbox-controls/zoom';
import '@mapbox-controls/zoom/src/index.css';

import ImageControl from '@mapbox-controls/image';
import '@mapbox-controls/image/src/index.css';

import CompassControl from '@mapbox-controls/compass';
import '@mapbox-controls/compass/src/index.css';
import {ref} from "vue";


export const useMapControl = defineStore('mapControl', () => {
    const rulerControl = new RulerControl();
    const zoomControl = new ZoomControl();
    const imageControl = new ImageControl();
    const compassControl = new CompassControl();

    const offsetRight = ref('100px');
    const offsetBottom = ref('20px');

    const initRulerControl = (map: any) => {
        map.addControl(rulerControl, 'bottom-right')
    }

    const initZoomControl = (map: any) => {
        map.addControl(zoomControl, 'bottom-right')
    }

    const initImageControl = (map: any) => {
        map.addControl(imageControl, 'bottom-right')
    }

    const initCompassControl = (map: any) => {
        map.addControl(compassControl, 'bottom-right')
    }


    const initBaseControl = (map: any) => {
        initCompassControl(map)
        initImageControl(map)
        initZoomControl(map)
        initRulerControl(map)
    }

    return {initBaseControl}
})

